# GitHub Action Documentation: Turn On EC2

## Table of Contents
1. [Introduction](#introduction)
2. [Functional Requirements](#functional-requirements)
3. [Non-Functional Requirements](#non-functional-requirements)
4. [Business Rules](#business-rules)
5. [Usage](#usage)
6. [Inputs](#inputs)
7. [Workflow Example](#workflow-example)
8. [Installation](#installation)
9. [License](#license)

## Introduction
This documentation describes a GitHub Action to turn on an existing EC2 instance in AWS. The action authenticates provided AWS credentials, connects to AWS, and starts the specified EC2 instance.

## Functional Requirements
1. **User Authentication**:
   - The system must authenticate the provided AWS credentials.

2. **Start EC2 Instance**:
   - The system must start a specific EC2 instance using its instance ID.

3. **Region Configuration**:
   - The system must allow the user to specify the AWS region where the EC2 instance is located.

## Non-Functional Requirements
1. **Security**:
   - AWS credentials must be securely stored as secrets in GitHub.

2. **Reliability**:
   - The action must ensure reliable execution of operations to start EC2 instances.

3. **Compatibility**:
   - The action must be compatible with the latest versions of GitHub Actions runners.

## Business Rules
1. **Credentials Validation**:
   - The system must validate AWS credentials before attempting to start the EC2 instance.

2. **EC2 Operation Error**:
   - If the operation to start the EC2 instance fails, the system must log and report the error appropriately.

3. **Conditional Execution**:
   - The action should only execute if the credentials and instance ID are correct and valid.

## Usage
To use this action, add the following code to your workflow YAML:
```yml
uses: archaic10/turn-on-ec2@main
with:
    access-key-id: ${{ secrets.ACCESS_KEY_ID }}
    secret-access-key: ${{ secrets.ACESS_SECRET_KEY }}
    region: ${{ secrets.REGION }}
    id-instance: ${{ secrets.ID_INSTANCE }}   
```

## Inputs 
- `access-key-id`: AWS Access Key ID (secret).
- `secret-access-key`: AWS Secret Access Key (secret).
- `region`: AWS region where the EC2 instance is located.
- `id-instance`: EC2 instance ID to be turned on.


## Workflow Example
```yml
name: Turn On EC2 Instance
on: [push]
jobs:
  turn-on-ec2:
    runs-on: ubuntu-latest
    steps:
      - name: Turn on EC2 instance
        uses: archaic10/turn-on-ec2@main
        with:
          access-key-id: ${{ secrets.ACCESS_KEY_ID }}
          secret-access-key: ${{ secrets.ACESS_SECRET_KEY }}
          region: ${{ secrets.REGION }}
          id-instance: ${{ secrets.ID_INSTANCE }}
  
```
## Installation
1. Configure AWS  [credentials](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions) as secrets in your repository.
2. Add the workflow YAML to your repository.

## License
This project is licensed under the MIT License.
For more information, visit the [project repository on GitHub](https://github.com/archaic10/turn-on-ec2).
