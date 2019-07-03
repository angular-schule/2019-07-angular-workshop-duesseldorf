<img src="http://assets.angular.schule/header-intensivworkshop.png">

#### **von Johannes Hoppe**

<hr>

**Herzlich Willkommen – und schön, dass Du dabei bist!**  
In diesem Repository findest Du während des Workshops den Quelltext unserer Beispielanwendung.

# 💬 Chat

Während des Workshops verwenden wir einen [Chat über den Dienst Gitter](https://gitter.im/2019-07-angular-workshop-duesseldorf/community).
Hier können wir Codeschnipsel, Links und andere Sachen teilen. Folge einfach diesem Link:

[<img src="https://badges.gitter.im/2019-07-angular-workshop-duesseldorf/community.svg" width="160">](https://gitter.im/2019-07-angular-workshop-duesseldorf/community)

Um die Nachrichten lesen zu können musst du nicht angemeldet sein.
Sofern du einen Account bei Gitlab, Github oder Twitter hast, kannst du dich über einen der Dienste einloggen und an der Diskussion beteiligen. Eine Beteiligung am Chat ist freiwillig und es ist für den Kurs nicht notwendig, dass du dich aktiv an der Diskussion beteiligst.  


# ✅ Vorbereitung

Damit wir gleich durchstarten können, solltest Du ein paar Vorbereitungen treffen.  
Die gesamte Installation wird rund 30 Minuten dauern. 

## Benötigte Software

1. **Node.js 12** oder höher: [https://nodejs.org](https://nodejs.org)
   + Mac-Benutzer bitte Homebrew verwenden! ([siehe Anleitung](https://presentations.angular.schule/HOMEBREW_NODE))
2. **Google Chrome:** [https://www.google.com/chrome/](https://www.google.com/chrome/)
   + **[Angular Augury](https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd)** (Chrome Extension)
   + **[Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)** (Chrome Extension)
4. **Visual Studio Code:** [https://code.visualstudio.com](https://code.visualstudio.com)
   + [Angular-Schule: Extension Pack](https://marketplace.visualstudio.com/items?itemName=angular-schule.angular-schule-extension-pack)  (Visual Studio Code Extension)
5. optional: **Git** (und ggf. ein grafischer Client wie SourceTree oder GitExtensions)


## Proxy?

Für die Proxykonfiguration im Unternehmensnetz sind gesonderte Einstellungen nötig.
Wir haben dir hierfür folgende Anleitung erstellt:
https://presentations.angular.schule/PROXY.html  
Sollte es Probleme mit dem Proxy geben, melde Dich bitte bei uns, dann finden wir eine Lösung.


## Pakete installieren

Die Angular CLI ist das offizielle Build-Tool für Angular. Mit folgendem Befehl kannst Du die CLI auf dem System installieren:

```
npm install -g @angular/cli
```

⚠️ Überprüfe bitte anschließend die Versionen, damit wir beim Workshop alle auf dem gleichen Stand sind.

```
node -v
> Erwartet: v12.x oder höher

npm -v
> Erwartet: 6.x oder höher

ng version
> Erwartet: 8.0.x oder höher
```


## Startprojekt erzeugen

Bitte lege das Übungsprojekt schon vor Beginn des Workshops an.
Die Angular CLI nimmt uns die meisten Schritte schon ab.
Was die Parameter im Einzelnen bedeuten, besprechen wir natürlich im Workshop!

Führe in Deinem Arbeitsverzeichnis die folgenden Befehle aus:

```
ng new book-rating --routing --style=scss --prefix=br
cd book-rating
ng serve
```

Die Installation kann bei langsamer Internetverbindung sehr lange dauern.
Warte beim Schritt `Installing packages for tooling via npm.` mit Geduld ab!


> Auf http://localhost:4200 sollte nun eine Website mit dem Text "Welcome to ..." erscheinen!
Wenn bei allen Teilnehmern das Grundgerüst steht, können wir ohne Zeitverlust loslegen.

![Screenshot CLI](http://assets.angular.schule/chrome_cli_welcome.png)


## Test-Umgebung prüfen

Beende den laufenden Webserver mit der Tastenkombination `Strg + C`.  
Prüfe bitte zum Abschluss, ob folgende Befehle ohne Fehlermeldungen ausführen:

```
ng test
ng e2e
```

Sollte es zu einer Fehlermeldung kommen, dann sende uns den Fehlertext einfach per Mail an [team@angular.schule](mailto:team@angular.schule).  
Wir werden schnell eine Lösung finden.



### Wir freuen uns schon! 🙂

Bei Fragen wende dich einfach direkt an das Angular-Schule-Team:  
[team@angular.schule](mailto:team@angular.schule)

<hr>

<img src="http://assets.angular.schule/logo-angular-schule.png" height="60">

### &copy; 2019 https://angular.schule | Stand: 03.07.2019



