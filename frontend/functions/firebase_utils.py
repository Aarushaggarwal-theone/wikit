import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from pwd_encrypt import encrypt_password
import random
import string

from location_utils import get_city_coords
from get_prediction import get_cluster
from username_utils import random_name
cred = credentials.Certificate('wikit-xino-firebase-adminsdk-knsf8-42dcbf6faa.json')  # Replace with your own path
firebase_admin.initialize_app(cred)

db = firestore.client()

def create_user(email, password, city, next_cap_hardik, rashid, rcb_win, sachin, team) :

# Function to generate a random user ID
    def generate_user_id(length):
        letters_and_digits = string.ascii_letters + string.digits
        return ''.join(random.choice(letters_and_digits) for _ in range(length))

    # Function to encrypt the password using base64
    def encrypt_password(password):
        return password
    
    # Generate a random user ID
    user_id = generate_user_id(20)


    # Encrypt the password
    encrypted_password = encrypt_password(password)
    user_coords = get_city_coords(city)[0]

    # Create a new user document in Firestore
    pred_data = (user_coords.latitude, user_coords.longitude, rashid, rcb_win, next_cap_hardik, sachin, team)
    groupId = get_cluster(pred_data)[0]
    groupId = str(groupId)
    user_data = {
        'following': 0,
        'coincount': 600,
        'status': "online",
        'groupId': groupId,
        'team': team,
        'username': random_name(),
        'userId': user_id,
        'email': email, 
        'password': encrypted_password,
    }
    
    group_ref = db.collection('groups').document(str(groupId))

    # Create a new user document within the "users" collection
    user_ref = group_ref.collection('users').document()

    users_ref = db.collection('users').document()

    # Set the user data within the new document
    user_ref.set(user_data)
    users_ref.set(user_data)

    # Pass the user ID to the frontend as a permanent cookie or in the response
    return user_id


def login_user(email, password):
    passwod = password
    encrypted_password = encrypt_password(passwod)
    # Query Firestore to find the matching user document


    # Create a new user document within the "users" collection
    users_ref = db.collection('users').document()

    query = users_ref.where('email', '==', email).limit(1)
    results = query.get()

    # Check if a user with the provided email exists
    if len(results) == 0:
        return None

    # Get the user document data
    user_data = results[0].to_dict()

    # Decrypt the stored password
    stored_password = user_data['password']


    # Check if the provided password matches the stored password
    if encrypted_password == stored_password:
        return user_data['userId']
    else:
        return "failed"

# Just example values so the code runs.
def create_message(groupId, sender_ID, message):
    group_ref = db.collection('groups').document(str(groupId))

    # Create a new user document within the "users" collection
    user_ref = group_ref.collection('users').document(sender_ID)

    
    messages_ref = user_ref.collection('messages').document()
    # Create a new message document in Firestore
    message_data = {
        'message': message,
        'timestamp': firestore.SERVER_TIMESTAMP
    }

    # Create a new message document within the "messages" collection

    # Set the message data within the new document
    messages_ref.set(message_data)

    return 'success'
