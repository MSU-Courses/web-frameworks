# Laboratorul 1. Fundamentele Symfony

Acest laborator vă face cunoștință cu fundamentele framework-urilor backend, folosind crearea unei mici aplicații "ToDo" ca exemplu.

## Cerințe
### Pregătirea

1. Instalați Symfony cu ajutorul Composer, urmând documentația oficială ([Instalați Composer](https://getcomposer.org/))

### Rutare și controlori

2. Creați o clasă controlor cu metode pentru gestionarea următoarelor cereri:
    1. `list`: pentru afișarea listei de sarcini
    2. `view`: vizualizarea unei singure sarcini
    3. `create`: crearea unei sarcini
    4. `update`: actualizarea unei sarcini
    5. `delete`: ștergerea unei sarcini

### Crearea entităților

3. Creați entitățile **"Task"** și **"Category"**
    1. Creați entitatea **Category**, care reprezintă o categorie de sarcini.
    2. Adăugați următoarele proprietăți (câmpuri) la entitatea **Category**:
        1. `id`: identificator unic al categoriei
        2. `name`: numele categoriei
    3. Creați entitatea **Task**, care reprezintă o sarcină.
    4. Adăugați următoarele proprietăți (câmpuri) la entitatea **Task**:
        1. `id`: identificator unic al sarcinii
        2. `title`: titlul sarcinii
        3. `description`: descrierea sarcinii
        4. `dueDate`: data limită pentru executarea sarcinii
        5. `createdAt`: data și ora creării sarcinii (completată automat)
    5. Definiți relația între entitățile `Task` și `Category`. O sarcină poate fi asociată cu o singură categorie, iar o categorie poate avea mai multe sarcini.

### Lucrul cu șabloane și date

1. Creați vizualizări folosind Twig pentru fiecare pagină a aplicației "ToDo".
    1. Pagina: lista de sarcini
    2. Pagina: vizualizarea unei sarcini
    3. Pagina: crearea și actualizarea sarcinilor
2. Pentru pagina listei de sarcini (list), afișați datele despre toate sarcinile, inclusiv titlul, data limită și categoria.
    1. _Notă_: Pentru obținerea notei maxime, trebuie să realizați paginarea.
3. Pentru pagina unei singure sarcini, afișați descrierea completă a sarcinii.

### Gestionarea și salvarea datelor din formular

1. Creați un formular corespunzător pentru crearea și actualizarea sarcinilor.
2. Gestiționați trimiterea datelor din formular, validați datele și salvați-le în baza de date.
    1. Lungimea minimă a titlului: **4** caractere.
    2. Lungimea maximă a titlului: **20** caractere.
3. Implementați ștergerea unei sarcini.

## Raport

Prezentați un raport despre activitatea desfășurată.

Încărcați proiectul pe git (Dacă doriți, puteți utiliza [gitlab.usm.md](https://gitlab.usm.md)).

Raportul trebuie să includă următoarele aspecte:

1. Introducere (nu mai mult de 5 propoziții)
2. Descrierea obiectivelor și principalelor etape ale proiectului.
3. O scurtă descriere a aspectelor de implementare. Nu trebuie să descrieți fiecare etapă, ci doar câteva caracteristici mai interesante ale implementării unor mecanisme sau funcționalități.
4. Concluzii.
5. Răspunsuri la întrebările de control.
6. Lista surselor utilizate.

## Întrebări de control

1. Care sunt avantajele utilizării framework-ului Symfony?
2. Care sunt metodele de definire a rutelor în Symfony?
3. Ce relație între tabelele bazei de date ați folosit și cum ați implementat-o?
4. Ce sunt migrațiile bazei de date și cum sunt folosite în Symfony?