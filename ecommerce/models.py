# ecommerce\models.py
from django.db import models

class User(models.Model):
    """Represents an individual user with basic contact information."""
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True) 
    def __str__(self):
        # This method will return the user's full name.
        return f'{self.first_name} {self.last_name}'

class Category(models.Model):
    """Categorizes products for easier management and navigation."""
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField(blank=True, null=True)
    def __str__(self):
        return f'{self.name}'

class Product(models.Model):
    """Details of products available for purchase including pricing and stock."""
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()
    category = models.ForeignKey(Category, related_name='products', on_delete=models.SET_NULL, null=True)
    # Using SET_NULL to preserve products even if their category is deleted, addressing the concern about losing product data.
    def __str__(self):
        return f'{self.name}'
    
class Address(models.Model):
    """Defines user addresses with types to distinguish between billing and shipping."""
    user = models.ForeignKey(User, related_name='addresses', on_delete=models.CASCADE)
    street = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=20)
    country = models.CharField(max_length=100)
    ADDRESS_TYPES = [('billing', 'Billing'), ('shipping', 'Shipping')]
    address_type = models.CharField(max_length=10, choices=ADDRESS_TYPES)
    is_primary = models.BooleanField(default=False)
    # Added logic to handle primary addresses can be implemented in the application logic, ensuring only one primary address per type.
    def __str__(self):
        return f'{self.city} {self.state} {self.zip_code}'
    
class Order(models.Model):
    """Represents orders placed by users, tracking status and timestamps."""
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=100, default='pending')

class OrderItem(models.Model):
    """Items within an order, including the product, quantity, and dynamic total price."""
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()

    @property
    def total_price(self):
        """Calculates total price of the item based on quantity and product price."""
        return self.quantity * self.product.price

class Return(models.Model):
    """Tracks returned items, including the reason and processing time."""
    order_item = models.ForeignKey(OrderItem, on_delete=models.CASCADE)
    reason = models.CharField(max_length=20, choices=[
        ('broken', 'Broken'),
        ('never_delivered', 'Never Delivered'),
        ('better_price', 'Found a Better Price'),
        ('not_as_described', 'Not as Described'),
        ('changed_mind', 'Changed Mind'),
    ])
    processed_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f'{self.order_item} {self.reason}'