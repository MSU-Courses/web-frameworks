# Лабораторная работа №4. Стейт-менеджемент в веб-приложениях

Эта лабораторная работа ознакамливает студентов с основами управления состоянием во фронтенд-фреймворках, а также предоставляет понимание работы со стейт-менеджерами, такими как `redux-toolkit`.

## Cerințe

### Integrarea Redux Toolkit

1. Instalați pachetele necesare pentru Redux Toolkit, dacă nu sunt deja instalate: `@reduxjs/toolkit` și `react-redux`.
2. Creați un store de bază utilizând funcția `configureStore`.

### Crearea unui `Slice` pentru Managementul Stării

1. Utilizând funcționalitatea Redux Toolkit, în special createSlice, creați un slice care să gestioneze starea task-urilor în aplicația.

### Acțiuni Asincrone în Redux Toolkit

1. Utilizând funcționalitatea Redux Toolkit, în special `createAsyncThunk`, creați un thunk asincron care să obțină date de la server.
2. Înlocuiți logica locală de obținere a datelor în componente cu utilizarea thunk-ului.

## Prezentarea lucrării de laborator

Prezentarea lucrării de laborator este obligatorie. În cazul absenței prezentării lucrării de laborator, nota maximă va fi 8, cu condiția îndeplinirii tuturor cerințelor.

## Raport

Prezentați un raport despre activitatea desfășurată și încărcați raportul pe Moodle.

Încărcați proiectul pe git (Dacă doriți, puteți utiliza [gitlab.usm.md](https://gitlab.usm.md)).

### Raport sub formă de fișier Word (PDF)

Raportul trebuie să includă următoarele aspecte:

1. Introducere (nu mai mult de 5 propoziții)
2. Descrierea obiectivelor și principalelor etape ale proiectului.
3. O scurtă descriere a aspectelor de implementare. Nu trebuie să descrieți fiecare etapă, ci doar câteva caracteristici mai interesante ale implementării unor mecanisme sau funcționalități.
4. Concluzii și link către Git.
5. Răspunsuri la întrebările de control.
6. Lista surselor utilizate.

### Raport sub formă de fișier readme

1.  Instrucțiuni privind instalarea și pornirea proiectului. Vă rugăm să specificați dependințele necesare și pașii necesari pentru a porni aplicația.
2. Descrierea proiectului dvs., inclusiv scopul și funcțiile sale principale.
3. Exemple de utilizare a proiectului, inclusiv capturi de ecran sau fragmente de cod, dacă este cazul.
4. Răspunsuri la întrebările de control.
5. Lista surselor utilizate.
6. Alte aspecte importante.

## Întrebări de control

1. Ce este `Redux Toolkit` și în ce scop este utilizat?
2. Ce înseamnă gestionarea stării în dezvoltarea frontend?
3. În ce situații este potrivit să utilizăm manageri de stare, cum ar fi `Redux Toolkit`?