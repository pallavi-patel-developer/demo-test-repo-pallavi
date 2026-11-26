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
