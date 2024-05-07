# Turn on EC2
 This action turn on an existing EC2 instance to AWS.

### example
```yml
uses: archaic10/turn-on-ec2@main
with:
    access-key-id: ${{ secrets.ACCESS_KEY_ID }}
    secret-access-key: ${{ secrets.ACESS_SECRET_KEY }}
    region: ${{ secrets.REGION }}
    id-instance: ${{ secrets.ID_INSTANCE }}   
```