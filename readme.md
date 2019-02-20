<h1 align="center"> CommonValor</h1>

## About 

CommonValor is a web application that uses the Steem ecosystem to reward activism with generation of quality content. It also incorporates an Exchange of Steem-Faircoin.

It uses Vue.js in frontend and Laravel in Backend taking advantage of the ease of integration of these 2 frameworks.

## Install and Building

The project uses the default Laravel Homestead configuration through Vagrant but you can use your own virtual environment or work with your own computer resources. 

Homestead helps to save time used in configuring the Backend tools for the development of the project.



## What do you need?

- **[PHP > 7](http://php.net/manual/es/intro-whatis.php)**

- **[Composer](https://getcomposer.org/)**

- **[Vagrant - Homestead (optional)](https://laravel.com/docs/5.7/homestead)**

- **[npm](https://www.npmjs.com/)**

- **[Vue with npm](https://vuejs.org/v2/guide/installation.html/)**


Once your virtual environment has been defined and installed, you can clone this repository into your virtual container. 


<h3>Configuration</h3>

After installing git and Vagrant, create a vagrant box

```
$ vagrant box add laravel/homestead
```

Then install Composer 

```
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '48e3236262b34d30969dca3c37281b3b4bbe3221bda826ac6a9a62d6444cdb0dcd0615698a5cbe587c3f0fe57a54d8f5') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

```
$ sudo apt install composer
```

Create the project folder 

```
$ mkdir CommonValor
```

Within project folder add composer to laravel homestead
```
$ composer require laravel/homestead --dev
```
```
$ php vendor/bin/homestead make
```

Within project folder create your SSH Keys 

```
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
```
eval "$(ssh-agent -s)"
```
Add your new SSH private key to the ssh-agent
```
 ssh-add -k ~/.ssh/id_rsa
```
Now run 
```
vagrant up
```

At this point the virutal server is running, we can communicate via SSH and install Laravel using

```
composer global require laravel/installer
```

Then we have to download php dependencies

```
composer install
```

Within CommonValor folder, where all the frontend code is, execute

```
npm install
```

In your web browser now you are able to visit the web application at IP 192.168.10.10. If a message displaying "No input specified" appears you should configure your homestead.yaml file within your project folder as follows

```
sites:
	-
    	map: homestead.test
    	to: /home/vagrant/code/CommonValor/public
```
Lastly if message _No application encryption key has been specified_ is displayed generate your key
development application executing the following command in your frontend folder CommonValor

```
php artisan key:generate
```

Refresh the browser

<h3>Running CommonValor</h3>

```
$ cd CommonValor/
$ vagrant up (optional)
$ composer install 
```
Within CommonValor project folder
```
$ npm install 
$ npm run dev
```

### Note
If you use vagrant and homestead you may have to configure the file /etc/hosts with the domain name "commonvalor.org.test" or you can modify the file .env and .env.example inside the folder of your homestead virtual server.


## License

Software licensed under [MIT license](https://opensource.org/licenses/MIT).


<p align="center"><img src="https://media.discordapp.net/attachments/508186494687772672/525495085618692126/unknown.png"></p>

## Why

This interoperability can be a natural, understandable and simple entrance for masses into the blockchain 'real world' social interaction context, ie, bridging these blockchains is a natural action due to the social nature of people. 


## Proof-of-Brain (PoB) + Proof-of-Cooperation (PoC)

Philantrophist Economy and organizations of Solidarity Economy are centred on the valorisation of the human being and not on the prioritisation of capital and **they're rarely incentiviced**, this leaded to a slow growth of the value they where creating. In this sense, FairCoop is a global Cooperative that uses FairCoin to exchange and create Value focused on organizations of Solidarity Economy and the Economics of Philanthropy; togetheer these Blockchains (Steem-Faircoin) can enhance these activities.

<p align="center"><img src="https://media.discordapp.net/attachments/508186494687772672/528258368033521680/unknown.png"></p>
<p align="center"> UI Design </p>
<p align="center"><img src="https://i.imgsafe.org/e4/e4ad05dbb6.png"></p>
<p align="center"> Merchants, Services and Products that accepts Faircoin </p>


We would like to extend our thanks to all the people that supports this integration from Many countries!

Join & Contribute vía Telegram

Faircoop Technical

>  https://t.me/joinchat/A9k9vgaH5Bhx3g1nZuBQkA<

Faircoop Development

>  https://t.me/joinchat/AAAAAAaikf1QW0Lsw6c8Gg

FairCoop Global Assemblies Group

> https://t.me/joinchat/B0S3OkT5VcP-PazMNoNdaA (Assemblies Every Thursday at 19.00 CET.)

Learn more or become part to the CommonValor Layer by following this information flow!

> https://steemit.com/created/faircoin

> https://steemit.com/created/faircoop

<p></p>
<p></p>

<p align="center"> <img src="https://i.imgsafe.org/ea/ea488b8fae.jpeg"></p>


## Vision and Steem Mining Value

This approach (Faircoin+Steem resourses) can be together a very friendly layer for people to interact with blockchain in an usual form, because the Philantropist, Activist and Solidarity activities of individuals are going to have more incentives, in contrast with the old unpaid volunteering. The flow of money and reliance on public funds can increase... 

[More about Steem-Faircoin proposal](https://docs.google.com/document/d/19nDhpQXi9zLZf9O7IWbDc9MIsr-k7OSlcGv2zZlZwrs/edit)

<p align="center"><img src="https://i.imgur.com/LRSajmF.jpg"></p>

## How to contribute

By running command

```
vagrant up 
```

the virtual server with frontend code is going to be running, so if changes are made to the **frontend** you just have te recompile it with 

```
npm run dev
```
if changes are made to the **backend** you have to reload vagrant 

```
vagrant reload --provision
```

