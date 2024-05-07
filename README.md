# Turn on EC2
 This action turn on an existing EC2 instance to AWS.

### example
```yml
uses: archaic10/turn-on-ec2@main
with:
    access-key-id: ${{ secrets.ACESS_KEY_ID }}
    secret-access-key: ${{ secrets.ACESS_SECRET_KEY }}
    region: ${{ secrets.REGION }}
    ami-instance: ${{ secrets.AMI_INSTANCE }}   
```