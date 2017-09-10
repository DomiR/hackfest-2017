# Hackfest 2017 with a truly amazing team :)

pip install paho-mqtt
cd ~/Downloads/nanoLambda/NSP32_SDK/examples/python/raspbian-jessie/example_wrapper_python2

# Route
[http://www.netzmafia.de/skripten/hardware/RasPi/RasPi_Network.html]
route -n
sudo route add default gw 10.201.7.254
echo net.ipv6.conf.all.disable_ipv6=1 > /etc/sysctl.d/local.conf


# Links
cd /usr/local/lib
sudo ln -s libgsl.so.0.14.0 /usr/lib/libgsl.so.0
sudo ln -s libgslcblas.so.0.0.0 /usr/lib/libgslcblas.so.0

# Install node
sudo apt-get update
sudo apt-get install nodejs npm node-semver

# Install pm2
npm install pm2 -g
sudo pm2 startup systemd -u pi

# Make it run on start
https://www.raspberrypi.org/documentation/linux/usage/rc-local.md

# Extra
## Clone disk
sudo dd if=/dev/rdisk2 bs=1m | gzip > ~/Desktop/pi.gz
gzip -dc ~/Desktop/pi.gz | sudo dd of=/dev/rdisk2 bs=1m
