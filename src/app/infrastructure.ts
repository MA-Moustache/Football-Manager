export class Infrastructure {
  private _id: number;
  private _ville: string;
  private _rue: string;
  private _numero: number;
  private _principale: number;
  private _nbTerrain: number;
  private _nbVestiaire: number;
  private _nbBallon: number;


  // test
  constructor(ville: string = "", rue: string = "", numero: number = 0, principale: number = 0, nbTerrain: number = 0, nbVestiaire: number = 0, nbBallon: number = 0)
  {
    this._ville = ville;
    this._rue = rue;
    this._numero = numero;
    this._principale = principale;
    this._nbTerrain = nbTerrain;
    this._nbVestiaire = nbVestiaire;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get ville(): string {
    return this._ville;
  }

  set ville(value: string) {
    this._ville = value;
  }

  get rue(): string {
    return this._rue;
  }

  set rue(value: string) {
    this._rue = value;
  }

  get numero(): number {
    return this._numero;
  }

  set numero(value: number) {
    this._numero = value;
  }

  get principale(): number {
    return this._principale;
  }

  set principale(value: number) {
    this._principale = value;
  }

  get nbTerrain(): number {
    return this._nbTerrain;
  }

  set nbTerrain(value: number) {
    this._nbTerrain = value;
  }

  get nbVestiaire(): number {
    return this._nbVestiaire;
  }

  set nbVestiaire(value: number) {
    this._nbVestiaire = value;
  }

  get nbBallon(): number {
    return this._nbBallon;
  }

  set nbBallon(value: number) {
    this._nbBallon = value;
  }

  public fromJson(json: any): Infrastructure {
    Object.assign(this, json); // il va matcher json -> this
    return this;
  }

  public toJson(): any {
    return {
      "id" : this._id,
      "ville" : this._ville,
      "rue" : this._rue,
      "numero" : this._numero,
      "principale" : this._principale,
      "nbTerrain" : this._nbTerrain,
      "nbVestiaire" : this._nbVestiaire,
      "nbBallon" : this._nbBallon
    };
  }
}
