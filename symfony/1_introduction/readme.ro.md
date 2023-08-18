# Introducere în Symfony

**Symfony** este o colecție de componente PHP, un framework  pentru crearea de aplicații web, cu o filozofie și o comunitate care interacționează armonios între ele.

În prezent, acest framework este larg utilizat în diferite proiecte, iar influența sa asupra lumii dezvoltării web este dificil de subestimat. De la crearea de aplicații corporative complexe până la dezvoltarea de startup-uri captivante, Symfony rămâne un tovarăș de încredere al dezvoltatorilor. Cu ajutorul său, sunt implementate nu doar sarcini tehnice, ci și principii filozofice de dezvoltare, contribuind la formarea unui produs software de calitate. De asemenea, datorită comunității active, Symfony continuă să evolueze, luând în considerare cele mai recente tendințe și standarde, pentru a rămâne în pas cu lumea în rapidă schimbare a tehnologiilor web.

## Avantaje și dezavantaje ale Symfony

| Avantaje | Dezavantaje |
| --- | --- |
| Ecosistem puternic, cu o comunitate solidă și mulți dezvoltatori | În ciuda documentației bune, framework-ul este dificil de învățat. |
| Documentație bună și în continuă actualizare pentru toate versiunile cadrului ||
| Multitudine de componente diferite, independente, pentru reutilizare ||
| Oferă mecanisme pentru teste funcționale și de unitate pentru identificarea erorilor în aplicațiile web ||
| Potrivit pentru proiecte web complexe, inclusiv comerț electronic ||

## Composer - manager de pachete PHP

![Manager de pachete Composer](/files/composer.png)

În PHP, una dintre cele mai populare modalități de instalare a pachetelor este utilizarea managerului de pachete Composer.

Composer este un manager de pachete pentru PHP. Acest instrument vă permite să specificați biblioteci și pachete

Pentru a instala Composer: [Link](https://getcomposer.org/download/)

## Instalarea Symfony

### Cerințe tehnice pentru Symfony
* PHP >= 8.1.
* Composer instalat


### Instalarea Symfony prin Composer
```sh
composer create-project symfony/skeleton:"6.3.*" directorul_meu_de_proiect
cd directorul_meu_de_proiect
# Dacă dezvoltați o aplicație web
composer require webapp
```

### Instalarea Symfony prin [symfony-cli](https://symfony.com/download)
```sh
# Instalare aplicație web tradițională
$ symfony new directorul_meu_de_proiect --version="6.3.*" --webapp
# Instalare Symfony dacă dezvoltați un microserviciu, API sau aplicație pentru cli
$ symfony new directorul_meu_de_proiect --version="6.3.*"
```

## Pornirea aplicației Symfony
Puteți porni aplicația Symfony folosind utilitarul CLI [symfony-cli](https://symfony.com/download)
```bash
symfony server:start
```