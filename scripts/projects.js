const portfolio = document.getElementById('portfolio');

class Project {
    constructor(title, image, description) {
        this.title = title;
        this.image = image;
        this.description = description;

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

const Project1 = new Project(
    'Pokédex',
    '../src/Ppokedex.png',
    'un pokedex',
)

const Project2 = new Project(
    'Gaming Place',
    '../src/Pgamingplace.png',
    'un site vitrine de créateurs de jeux',
)

const Project3 = new Project(
    'Ace-Attorney Remaster',
    '../src/Paceattorney.png',
    'un remaster du jeu Ace Attorney',
)

const Project4 = new Project(
    'Portfolio',
    '../src/Pportfolio.png',
    'Le portfolio ici présent!',
)