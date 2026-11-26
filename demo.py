# Step 1: Python Workspace Setup & Data Loading
import pandas as pd
import numpy as np

def load_and_inspect_data(file_path):
    print("Loading data for Assignment 2...")
    df = pd.read_csv(file_path)
    print(f"Shape: {df.shape}")
    print(df.head())
    return df

if __name__ == "__main__":
    data = load_and_inspect_data("dataset.csv")

# Step 2: PyTorch / Scikit-Learn Model Pipeline
import torch
import torch.nn as nn

class AssignmentModel(nn.Module):
    def __init__(self, input_dim=10, output_dim=2):
        super(AssignmentModel, self).__init__()
        self.fc1 = nn.Linear(input_dim, 64)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(64, output_dim)

    def forward(self, x):
        return self.fc2(self.relu(self.fc1(x)))

model = AssignmentModel()
print(model)