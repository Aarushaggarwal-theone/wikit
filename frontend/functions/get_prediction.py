# get_predictions.py
import pickle
import numpy as np
loaded_model = None
# Load the model from the file

def get_cluster(input_user_data):
  with open("kmeans_model.pkl", 'rb') as file:
    loaded_model = pickle.load(file)
  arr = np.array([input_user_data])
  prediction = loaded_model.predict(arr)
  print(prediction)
  return prediction
get_cluster((28.7041, 77.1025, 0.0, 0.0, 0.0, 0.0, 0.0))