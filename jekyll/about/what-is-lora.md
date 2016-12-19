---
layout: page
title: What is LoRa?
---

LoRaWAN is a Low Power, long distance, wireless transmission ecosystem designed for IOT. It includes the following benefits and drawbacks.

- Transmission is on one of 64 channels upstream and one of eight higher bandwidth channels downstream.
The payload is slower than realtime audio or video and really lends itself to simple sensor update.

- Communication is initiated by the sensor and not by the Gateway. (our deployment is Class A)

- Distance is quite far (in the range of seven miles) but the transmission payload will scale to support the distance.

- Transmission security is based on three keys including the IP address, Network Server and Application Server. Additional encryption is also available like AES256.

- Provisioning can take place through the Network Server or Over the Air.

- LoRaWAN is adopted in many counties overseas but North America is only starting the deployment process.

- A sensor can connect to multiple gateways and the Network Server will arbitrate the strongest transmission.
