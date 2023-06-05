import pickle
import json
import numpy as np

# Load the DBSCAN model from the pickle file
with open('dbscan_model.pkl', 'rb') as file:
    dbscan_model = pickle.load(file)

# Serialize the necessary attributes
eps = dbscan_model.eps
min_samples = dbscan_model.min_samples
labels = dbscan_model.labels_
core_sample_indices = dbscan_model.core_sample_indices_

# Create a dictionary with the serialized attributes
serialized_model = {
    'eps': eps,
    'min_samples': min_samples,
    'labels': labels.tolist(),
    'core_sample_indices': core_sample_indices.tolist()
}

# Convert the serialized model to JSON format
json_model = json.dumps(serialized_model)

# Write the JSON model to a file
with open('dbscan_model.json', 'w') as file:
    file.write(json_model)
