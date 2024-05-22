import { Injectable } from '@angular/core'

export interface DemoNews {
    id: number;
    title: string;
    content: string;
    banner: string;
    likes: number;
    category: string;
    publishDate: Date;
}

@Injectable({
    providedIn: 'root'
})
export class DemoNewsService {
    constructor() { }

    getNews(): DemoNews[] {
        return [
            {
                id: 1,
                title: 'Noticia 1',
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat ornare elit, vel cursus metus tincidunt et. Duis facilisis pellentesque nulla a congue. Aliquam libero turpis, pharetra eu eros sed, dapibus dapibus dolor. Praesent cursus, dolor sit amet dignissim venenatis, ligula diam scelerisque sem, id eleifend lectus risus porta nunc. Donec varius tortor arcu, quis faucibus ipsum semper sit amet. Etiam efficitur nibh magna, et maximus sapien mollis fermentum. Sed nec felis lacinia, ultrices nunc eu, laoreet urna. Donec ut nunc id lacus euismod mollis ac quis metus. Vivamus quis est et augue aliquam convallis.

            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tempor ornare mi id ullamcorper. Donec aliquam mauris quis feugiat condimentum. Duis tempus cursus sapien vitae varius. Etiam auctor commodo sapien ut pulvinar. Aenean non eros semper, euismod augue et, euismod leo. Vivamus hendrerit, elit ut elementum rhoncus, lorem lorem iaculis arcu, viverra dapibus nisi tellus sollicitudin lorem. Quisque eget accumsan neque. Sed in metus id nisi volutpat elementum vel vel leo. Vestibulum sed risus maximus, pharetra enim at, ultricies libero. In semper nec arcu in euismod. Cras semper augue erat, vel dapibus ipsum tincidunt in. Donec ullamcorper convallis velit.
            
            Etiam quis pharetra augue, vel laoreet elit. Donec sit amet semper massa, vitae dapibus augue. Cras eu felis commodo, pharetra eros sit amet, laoreet tortor. Curabitur sit amet vulputate lorem. Mauris nec venenatis orci. Nunc egestas tincidunt congue. Nunc pharetra cursus odio ac aliquam. Ut ultricies elit id dui elementum, in porttitor odio sollicitudin. Nullam vitae nulla sit amet nulla luctus accumsan vel quis justo. Mauris condimentum, lorem non molestie rhoncus, metus dolor tincidunt ex, sed suscipit odio odio eget ligula. Sed quis magna ut purus placerat vulputate ut a est. Quisque rhoncus quis ligula quis tincidunt.
            
            Nunc tincidunt auctor enim nec efficitur. Morbi quis tellus nec mauris dapibus iaculis. Duis fermentum elit eu orci suscipit molestie. Aliquam facilisis nisl in pharetra fringilla. Fusce lacinia augue at risus laoreet euismod. Cras ultrices scelerisque purus, ac feugiat orci pharetra ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas venenatis at ex et iaculis. Quisque cursus mi sit amet nulla sollicitudin, ut ornare eros sagittis. Curabitur vitae placerat arcu, eget sollicitudin augue. Nullam tincidunt enim auctor nunc finibus ultrices. Aliquam erat volutpat. Donec facilisis malesuada justo, a sagittis leo tempor eu. Aliquam congue mi sit amet lectus porta finibus.`,
                likes: 10,
                banner: 'https://i.ibb.co/P409HvF/news-Banner.jpg',
                category: 'Entretenimiento',
                publishDate: new Date("03/02/2024")
            },
            {
                id: 2,
                title: 'Noticia 2',
                content: 'Contenido de noticia 2',
                likes: 10,
                banner: 'https://i.ibb.co/P409HvF/news-Banner.jpg',
                category: 'Alimentación',
                publishDate:new Date("03/01/2022")
            },
        ]
    }

    getNewById(id: number): DemoNews | undefined {
        return this.getNews().find(news => news.id === id);
    }

    getNewsByCategory(category: string): DemoNews[] | [] {
        return this.getNews().filter(news => news.category === category);
    }
}