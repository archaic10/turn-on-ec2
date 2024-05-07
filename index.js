const AWS = require('aws-sdk');
const accessKeyId = core.getInput('access-key-id');
const secretAccessKey = core.getInput('secret-access-key');
const region = core.getInput('region');
const amiInstance = core.getInput('ami-instance');

AWS.config.update({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    region: region
});

const ec2 = new AWS.EC2();

function startInstance(instanceId) {
    const params = {
      InstanceIds: [instanceId]
    };
  
    ec2.startInstances(params, function(err, data) {
      if (err) console.log(err, err.stack);
      else console.log('Instância iniciada com sucesso:', data);
    });
}

function validateParams(){
    if(!accessKeyId && accessKeyId == ""){
        console.log("access-key-id undefined!");
        return false;
    }

    if(secretAccessKey){
        console.log("secret-access-key undefined!");
        return false;
        
    }
    if(region){
        console.log("region undefined!");
        return false;
        
    }
    if(amiInstance){
        console.log("ami-instance undefined!");
        return false;
    }
    return true;
}

if(validateParams()){
    startInstance(amiInstance);
}
