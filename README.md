# Projekt: Filmový magazín

Toto je projekt na procvičení React Routeru. Představ si, že programuješ stránku internetového filmového magazínu. Naše aplikace bude mít menu, ve kterém se můžeš přepnout mezi několika stránkami. Na webu budou stránky *Home*, *Reviews*, *Articles* a *Movies*.

Na reálném webu by stránky *Home*, *Reviews* a *Articles* obsahovaly dynamický obsah. Např. seznam aktuálních filmů v kině na domovské stránce, seznam recenzí na stránce Reviews a třeba blogové příspěvky na stránce Articles. V našem cvičném projektu na těchto stránkách zobrazíme pouze statický text. Půjde nám pouze o to, naučit se mezi stránkami přepínat.

Na stránce Movies se trochu vyřádíme. Na levé straně budeme chtít zobrazit seznam filmů v naší "databázi". Po kliknutí na jméno filmu chceme na pravé polovině stránky zobrazit detail konkrétního filmu.

V projektu použijeme React Router, abychom se mohli mezi jednotlivými stránkami přepínat. I když je náš web vytvořený jako SPA, budou mít díky React Routeru jednotlivé stránky vlastní adresy, takže bude možné například nasdílet přítelům odkaz na konkrétní film.


## Zprovoznění projektu

- Pomocí tlačítka **Use this template** a potom **Create a new repository** si udělěj kopii tohoto repozitáře do svého GitHub účtu.
- Svůj vytvořený repozitář si naklonuj k dosbě na disk.
- Na příkazové řádce ve složce projektu spusť `npm install`, aby se ti doinstalovaly potřebné závislosti.


## Struktura aplikace

Struktura celé naší aplikace bude vypadat následovně:

![Rozložení komponent](rozlozeni-komponent.png)


## Zadání úkolu

1. HTML a CSS pro projekt si můžeš vymyslet úplně sama nebo můžeš použít kód připravený v projektu ve složce `html-vzor`. HTML rozkouskuj do příslušných komponent a přidej k nim potřebné CSS.
1. Do projektu si doinstaluj React Router:
   ```
   npm install react-router-dom
   ```
1. Založ si složku `components` a vytvoř v ní komponenty `Home`, `Reviews` a `Articles`. Doplň do komponent nadpis a nějaký vymyšlený text. Pokud chceš, můžeš přidat i nějaký vlastní obrázek.
1. Vytvoř komponentu `Movies`, do které si zatím přidej třeba jenom nadpis. Další obsah doplníme později.
1. V hlavním `index.jsx` naimportuj potřebné komponenty a funkce z React Routeru.
1. Vytvoř si definici cest pro router a nastav vše tak, aby se pod adresou `/` zobrazila na stránce komponenta `<App />`.
1. Do komponenty `App` přidej `<Outlet />` z React routeru a zařiď, aby se v tomto outletu zobrazovaly komponenty `<Home />`, `<Reviews />`, `<Articles />` a `<Movies />`. *Home* se bude zobrazovat při zadání adresy `/`. Ostatní komponenty budou mít adresy `/reviews`, `/articles`, `/movies`, atd. V definici routeru tyto routy udělej jako potomky hlavní routy `/`.
1. Vytvoř komponentu `Menu` a přidej do ní odkazy na jednotlivé stránky. Komponentu vlož do hlavní `App` tak, aby bylo menu vždy viditelné, i když se budeme přepínat mezi stránkami.
1. Vytvoř komponentu `MovieList`, která bude zobrazovat seznam filmů (doplníme v dalším kroku). Komponentu přidej dovnitř komponenty `Movies`. Chceme, aby se seznam filmů zobrazil na stránce Movies, když klikneme na odkaz v menu.
1. V tomto projektu nebudeme pracovat se serverovým API, odkud bychom načítali data. Ale všimni si, že v projektu ve složce `/src` máme soubor `movie-database.js`, který exportuje pole nazvané `movies`. Toto pole můžeme v našem projektu naimportovat, kdekoliv budeme potřebovat pracovat s filmovými daty. Naimportuj `movies` z `movie-database.js` do komponenty `MovieList`.
1. Použij data k tomu, abys v komponentě zobrazila seznam filmů. Pro každý film v databázi se zobrazí název filmu, který bude fungovat jako odkaz pro React Router a povede na adresu `/movies/1`, kde místo `1` bude vždy ID konkrétního filmu.
1. Do komponenty `Movies` přidej `<Outlet />` z React Routeru. Uvnitř tohoto outletu budeme chtít zobrazovat detail filmu, když klikneme na jeho odkaz v `MovieList`.
1. Vytvoříme komponentu `Movie`, která bude sloužit pro zobrazení detailu filmu.
1. V definici routeru v hlavním `index.jsx` doplníme jako potomka pod routu `movies` novou dynamickou cestu `:id`, která bude zobrazovat naši novou komponentu `Movie` s detailem filmu.
1. V komponentě `Movie` si pomocí `useParams` načti ID filmu, který máš zobrazit.
1. I do komponenty `Movie` si naimportuj data z `movie-database.js`. Podle ID získaného z `useParams` vyhledej v datech správný film a zobraz jeho detaily v komponentě. Stačí, když zobrazíš obrázek, název filmu a jeho popis.

Až bude celá aplikace hotová, mělo by jít klikáním v menu přepínat mezi jednotlivými stránkami. První tři stránky budou jen obyčejné textové. Stránka *Movies* bude zobrazovat na levé straně seznam filmů. Když se v seznamu klikne na název filmu, zobrazí se na pravé stránce detail vybraného filmu.

## Bonus

1. Doplň do detailu filmu i další údaje, které jsou v databázi - rok vydání filmu, žánr, hodnocení, řežiséra a seznam herců.
1. Přidej do projektu i chybovou stránku, pokud by někdo zadal adresu neexistující stránky.
1. Použij komponentu `NavLink` z routeru, abys v menu i v seznamu filmů zvýraznila aktuálně vybranou stránku/film. Popis komponenty `NavLink` najdeš v [dokumentaci](https://reactrouter.com/en/main/components/nav-link).
1. Doplň vlastní CSS styly, aby všechno vypadalo nádherně.