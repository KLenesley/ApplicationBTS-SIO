# Documentation technique
Cette documentation vous explique comment installer ce projet sur votre ordinateur local afin d'y effectuer vos propres modifications ou de mettre à jour le site.

## Étapes d'initialisation du projet
### 1. Cloner le projet
Pour commencer, vous devez <ins>cloner</ins> ce projet.
```
git clone https://github.com/KLenesley/ApplicationBTS-SIO.git
```

### 2. Installer Node.js
Afin d'utiliser le projet, vous devez au préalable avoir installé <ins>Node.js</ins>.
Si ce n'est pas le cas, rendez-vous sur [nodejs.org](https://nodejs.org) et cliquez sur `Télécharger Node.js (LTS)`.
Poursuivez en laissant les paramètres d'installation par défaut.

### 3. Installer les composants/bibliothèques nécéssaires
Comme un projet next.js a déjà été créé, vous n'avez pas besoin d'en créer un nouveau.
Ouvrez simplement l'invite de commande et tapez :
```
npm install
```
Cette commande installera tous les composants utilisés par le projet.

### 4. Créer la base de données et le fichier .env
Pour le bon fonctionnement de quiz, vous devez avoir un compte sur [Supabase](https://supabase.com/) (gratuit).
Créez une nouvelle base de données dans laquelle vous mettrez deux tables, `quiz_quetions` et `quiz_answers`.

Dans `quiz_questions`, créez :
- une colonne **id** de type **int8**,
- une colonne **question** de type **varchar**.

Dans `quiz_answers`, créez :
- une colonne **id** de type **int8**,
- une colonne **question_id** également de type **int8** (qui servira de liaison avec les id de la table `quiz_questions`),
- une table **answer** de type **varchar**,
- une table **answerF** de type **int8** (qui permettra de définir la force de chaque réponse afin d'établir la note finale sur 100).

Après cela, enregistrez et cliquez sur le bouton `Connect` et allez dans **App Frameworks** puis copiez le contenu.
Mettez-le dans un fichier **.env** créé à la racine de votre dossier local.
Collez le contenu dedans et le quiz fonctionnera.

### 5. Lancer le projet
Enfin, ouvrez votre IDE (par exemple Visual Studio Code) puis, dans le terminal, tapez :
```
npm run dev
```
Cela vous donnera les URL permettant d'accéder à votre projet via votre navigateur en local.
