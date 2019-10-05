// Record<K,T>
// construct new type .
// so that every property in type T has property in type K
interface PageInfo {
    title: string;
    body:string;
}

type Page = 'home' | 'about' | 'contact';

const x: Record<Page, PageInfo> = {
    about: { title: 'about',body:"" },
    contact: { title: 'contact',body:"" },
    home: { title: 'home',body:"" },
}

//now every property in 'Page' has property 'title' and 'body'
console.log(x);