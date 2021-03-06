export class Joueur {
  private _id: number;
  private _nom: string;
  private _prenom: string;
  private _attaque: number;
  private _defense: number;
  private _salaire: number;
  private _numeroMaillot: number;


  // test
  constructor(nom: string = "", prenom: string = "", attaque: number = 0, defense: number = 0, salaire: number = 0, numeroMaillot: number = 0)
  {
    this._nom = nom;
    this._prenom = prenom;
    this._attaque = attaque;
    this._defense = defense;
    this._salaire = salaire;
    this._numeroMaillot = numeroMaillot;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get attaque(): number {
    return this._attaque;
  }

  set attaque(value: number) {
    this._attaque = value;
  }

  get defense(): number {
    return this._defense;
  }

  set defense(value: number) {
    this._defense = value;
  }

  get salaire(): number {
    return this._salaire;
  }

  set salaire(value: number) {
    this._salaire = value;
  }

  get numeroMaillot(): number {
    return this._numeroMaillot;
  }

  set numeroMaillot(value: number) {
    this._numeroMaillot = value;
  }

  public fromJson(json: any): Joueur {
    Object.assign(this, json); // il va matcher json -> this
    return this;
  }

  public toJson(): any {
    return {
      "id" : this._id,
      "nom" : this._nom,
      "prenom" : this._prenom,
      "attaque" : this._attaque,
      "defense" : this._defense,
      "salaire" : this._salaire,
      "numeroMaillot" : this._numeroMaillot
    };
  }
}
