# Lucrare de laborator nr. 3. Fundamentele React

Această lucrare de laborator îi introduce pe studenți în fundamentele framework-ului React, folosind ca exemplu o mică aplicație `Todo`.

## Cerințe

### Configurarea mediului de dezvoltare

1. Instalați React folosind `create-react-app` sau `Vite`.

### Componente

1. Creați pagina principală pe care vor fi afișate task-urile și organizați structura paginii prin împărțirea acesteia în componente corespunzătoare.
    1. `Header` - Această componentă va fi responsabilă de partea de sus a paginii, inclusiv titlul și, eventual, elementele de navigare sau filtrele pentru task-uri.
    2. `Footer` - Această componentă va gestiona partea de jos a paginii, care poate conține, de exemplu, informații despre creatorul aplicației sau legături suplimentare.
    3. `TaskList` - Această componentă va fi folosită pentru afișarea listei de task-uri. Poate include containere pentru task-uri individuale, precum  `TaskBlock`
    4. `TaskBlock` - Această componentă va afișa un task individual în listă. Poate conține informații despre task, cum ar fi titlul, descrierea și starea de finalizare.
2. Dacă nu se găsesc sarcini, afișați un mesaj corespunzător în loc de blocuri.
3. Dacă considerați necesar, includeți componentele suplimentare necesare.
* _Nota_: datele despre sarcini trebuie să fie stocate sub forma unui fișier .json (e.g. `tasks.json`)

### Obținerea datelor de pe server

Această sarcină este destinată studenților care doresc să obțină nota maximă, 10.

1. Utilizați FakeAPI ([mockApi](https://mockapi.io/)) pentru a obține date de pe server.
2. Analizați posibilele erori în interacțiunea cu serverul, cum ar fi erorile de rețea sau erorile de server, și furnizați gestionarea erorilor pentru o aplicație mai stabilă.
3. Adăugați o indicare a încărcării atunci când obțineți date de pe server (utilizați componente skeleton) pentru a ajuta utilizatorul să înțeleagă procesul de încărcare.

### Sortare și căutare

1. Adăugați funcționalitatea de sortare pentru task-uri în ordine crescătoare și descrescătoare.
    1. **Opțional**:  Adăugați funcționalitatea de căutare a task-urilor după nume folosind un mecanism de întârziere (debounce).

### Utilizarea rutării

1. Cu ajutorul rutării, extindeți aplicația prin adăugarea de pagini suplimentare
    1. Pagina unei singure task. Rută: `/task/{id}`
    2. Pagina "Favorite", unde puteți salva task-urile selectate. Rută: `/saved`
2.  Pentru a evita pierderea datelor în secțiunea "Favorite", utilizați stocarea locală (LocalStorage).

### Formulare

1. Dezvoltați un formular pentru introducerea și salvarea de task-uri noi. După completarea formularului, task-ul ar trebui să fie salvat.
    1. Dacă nu interacționați cu un server, salvați task-ul într-un vector local de date.
2. Realizați validarea datelor la nivelul clientului pentru cel puțin două câmpuri.

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
1. Ce este `NodeJS` și în ce scop este utilizat?
2. Ce reprezintă `Webpack` și cum se deosebește de `Vite`?
3. Ce este rutarea (routing) în dezvoltarea web?

### Întrebare de control la alegere (alegeți întrebarea 4 sau 5)
1. Cum funcționează DOM-ul virtual în bibliotecile și framework-urile precum React și Vue?
2. Ce înseamnă reactivitatea într-o aplicație web?