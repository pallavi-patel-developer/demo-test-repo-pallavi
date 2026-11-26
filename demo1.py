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