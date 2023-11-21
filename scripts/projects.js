const portfolio = document.getElementById('portfolio');

class Project {
    constructor(title, image, description, link) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.link = link;

        this.createProjectElement();
    }
    createProjectElement() {
        this.Pcard = document.createElement('div');
        this.Pcard.classList.add('project');

        this.Pname = document.createElement('h3');
        this.Pname.innerHTML = this.title;

        this.Pimg = document.createElement('img');
        this.Pimg.src = this.image;
        this.Pimg.alt = `image de ${this.title}`;

        this.Pdesc = document.createElement('p');
        this.Pdesc.innerHTML = this.description;

        this.Pcard.appendChild(this.Pname);
        this.Pcard.appendChild(this.Pimg);
        this.Pcard.appendChild(this.Pdesc);

        portfolio.appendChild(this.Pcard);
    };
}

new Project(
    'Pokédex',
    '../src/projects/Ppokedex.png',
    'un pokedex',
    'https://flozerty.github.io/Flokedex-JSavance/'
)

new Project(
    'Gaming Place',
    '../src/projects/Pgamingplace.png',
    'un site vitrine de créateurs de jeux',
)

new Project(
    'Ace-Attorney Remaster',
    '../src/projects/Paceattorney.png',
    'un remaster du jeu Ace Attorney',
    'https://flozerty.github.io/ace-attorney-remaster/'
)

new Project(
    'Portfolio',
    '../src/projects/Pportfolio.png',
    'Le portfolio ici présent!',
    'https://flozerty.github.io/portfolio/'
)