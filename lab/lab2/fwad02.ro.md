# Lucrare de laborator nr. 2. Symfony avansat

Această lucrare de laborator îi familiarizează pe studenți cu funcționalitățile avansate ale framework-ului Symfony. Pentru realizarea acestei lucrări, se recomandă utilizarea proiectului din [Laboratorul nr. 1](../lab1/fwad01.ro.md).

## Cerințe

### Servicii

1. Implementați serviciul personalizat `TaskService`, care permite crearea, editarea, ștergerea și obținerea unei liste de sarcini în aplicație.

### Securitate

1. Configurați autentificarea și autorizarea.
   1. Implementați un mecanism de autentificare care permite utilizatorilor să se conecteze la sistem utilizând numele lor de utilizator și parola.
   2. Introduceți măsuri de autorizare care să limiteze posibilitatea de a crea noi sarcini doar pentru utilizatorii autentificați.

### Testare

1. Utilizați framework-ul PHPUnit pentru a testa funcționalitatea selectată a aplicației, inclusiv teste de integrare, pentru a asigura fiabilitatea și corecta funcționare a acestei părți a aplicației.

## Raport

Prezentați un raport despre activitatea desfășurată și încărcați raportul pe Moodle.

Încărcați proiectul pe git (Dacă doriți, puteți utiliza [gitlab.usm.md](https://gitlab.usm.md)).

În raport trebuie să fie evidențiate următoarele aspecte:

1. Introducere (nu mai mult de 5 propoziții).
2. Descrierea obiectivelor și principalelor etape ale proiectului.
3. O scurtă descriere a aspectelor de implementare. Nu este necesar să descrieți fiecare pas, ci doar câteva aspecte mai interesante ale implementării unor mecanisme sau funcționalități.
5. Concluzii și link către Git.
6. Răspunsuri la întrebările de control.
7. Lista surselor utilizate.

## Întrebări de control

1. Ce reprezintă `Service Layer` în arhitectura Model-View-Controller (MVC) a aplicațiilor web și ce rol au ele în separarea logicii?
2. Explicați conceptele de autentificare și autorizare în dezvoltarea web. 
3. Cum se poate implementa autentificarea utilizatorilor și restricționarea accesului la anumite rute sau acțiuni în framework-ul selectat de dvs.?
4. Care este diferența dintre testarea unitară (`Unit Tests`) și testarea de integrare (`Integration Tests`)?