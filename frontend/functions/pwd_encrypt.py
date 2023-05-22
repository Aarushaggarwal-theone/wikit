import base64


def encrypt_password(password):
    encoded_bytes = base64.b64encode(password.encode('utf-8'))
    encrypted_password = encoded_bytes.decode('utf-8')
    return encrypted_password


def decrypt_password(encrypted_password):
    decoded_bytes = base64.b64decode(encrypted_password.encode('utf-8'))
    password = decoded_bytes.decode('utf-8')
    return password