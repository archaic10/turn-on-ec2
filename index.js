const AWS = require('aws-sdk');
const core = require('@actions/core')
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
        if (err){
            core.setFailed(err, err.stack);
            return;
        }

        console.log('Instance started successfully:', data);
    });
}

function validateParams(){
    if(!accessKeyId && accessKeyId == ""){
        core.setFailed("access-key-id undefined!");
        return false;
    }

    if(!secretAccessKey && secretAccessKey == ""){
        core.setFailed("secret-access-key undefined!");
        return false;
        
    }

    if(!region && region == ""){
        core.setFailed("region undefined!");
        return false;
        
    }

    if(!amiInstance && amiInstance == ""){
        core.setFailed("ami-instance undefined!");
        return false;
    }
    return true;
}

if(validateParams()){
    startInstance(amiInstance);
}
