# ecommerce\admin.py
from django.contrib import admin
from django.utils.html import format_html
from .models import User, Category, Product, Address, Order, OrderItem, Return
from django.urls import reverse

# Enhanced ProductAdmin to include clickable links for categories
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'stock', 'category_link')  # Use a custom method to display categories as links
    list_filter = ('category',)  # Enable filtering by category
    search_fields = ('name', 'category__name')  # Enable searching by product name and category name
    
    def category_link(self, obj):
        """Creates a clickable link to the category in the admin."""
        link = reverse("admin:ecommerce_category_change", args=[obj.category.id])  # Reverse to category change form
        return format_html('<a href="{}">{}</a>', link, obj.category.name)
    category_link.short_description = 'Category'  # Sets column header

# Inline admin for OrderItems to edit within the Order admin page
class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 1  # Defaults to one extra row for convenience

# Custom admin for Order to include inline items and enhanced search
class OrderAdmin(admin.ModelAdmin):
    inlines = [OrderItemInline]  # Enables editing of OrderItems directly within the Order
    list_display = ('id', 'user_link', 'created_at', 'status')  # Custom method for user links
    list_filter = ('status', 'created_at')  # Filters for easy navigation
    search_fields = ('user__first_name', 'user__last_name', 'id')  # Expanded search capabilities
    
    def user_link(self, obj):
        """Generates a clickable link to the user's admin change page."""
        link = reverse("admin:ecommerce_user_change", args=[obj.user.id])  # Creates the URL to the user's admin change page
        return format_html('<a href="{}">{}</a>', link, obj.user.email)
    user_link.short_description = 'User'  # Column name

# Registering models with the admin site, using the custom admin classes where applicable
admin.site.register(User)
admin.site.register(Category)
admin.site.register(Product, ProductAdmin)
admin.site.register(Address)
admin.site.register(Order, OrderAdmin)
admin.site.register(Return)
admin.site.register(OrderItem)

"""
This setup enhances the Django admin interface for the e-commerce platform by:
- Providing clickable links to related objects for quick navigation (e.g., from a product to its category).
- Expanding search functionality to cover related object fields.
- Introducing inline editing for related models to streamline management tasks.
These improvements aim to enhance usability and efficiency for administrators managing the site.
"""
