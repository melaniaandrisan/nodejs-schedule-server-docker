# nodejs-schedule-server-doker
A node js server which gets data from one internal API and sends it to a public API.

### Instalation

You can create your own image or you can use mine which can be found on [docker hub](https://hub.docker.com/r/mela/friendlyplug/). 

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
