# nodejs-schedule-server-doker
A node js server which gets data from one internal API and sends it to a public API.

### Instalation

To run it locally make sure you have node install and than can clone the repository, run `npm install` in your current folder and than `node index.js`. 

On a docker container: you can [create your own image](https://docs.docker.com/docker-cloud/builds/push-images/) or you can use mine which can be found on [docker hub](https://hub.docker.com/r/mela/friendlyplug/). 

Make sure you have docker installed on you machine. 
Just run this docker command and you are set:

```
sudo docker run --name friendlyplug \
  --network host \
  -e PIURL="<Internal API>" \
  -e APIURL="<External API>" \
  mela/friendlyplug:version1.0
```

P.S.: Please replace the `<Internal API>` and the `<External API>` with your API URLs. 
