import N3, { DataFactory } from 'n3';

/**
 * @typedef {Object} Namespace
 * @property {string} baseIRI
 * @property {string} prefix
 */

/**
 * Creates a namespace.
 *
 * @param {Object} options
 * @param {string} options.baseIRI
 * @param {string} options.prefix
 * @returns {Namespace}
 */
function createNamespace(options) {
  const { baseIRI = '', prefix = '_:' } = options;
  return { baseIRI, prefix };
}

/**
 *
 * @param {Namespace} namespace
 * @param {string} localName
 * @returns {N3.NamedNode}
 */
function createNamedNode(namespace, localName) {
  const { prefix } = namespace;
  return DataFactory.namedNode(`${prefix}:${localName}`);
}

const ns = {
  SchemaOrg: createNamespace({
    baseIRI: 'https://schema.org/',
    prefix: 'schema',
  }),
};

const SchemaOrg = {
  MusicGroup: createNamedNode(ns.SchemaOrg, 'MusicGroup'),
  MusicRecording: createNamedNode(ns.SchemaOrg, 'MusicRecording'),
  Person: createNamedNode(ns.SchemaOrg, 'Person'),
  byArtist: createNamedNode(ns.SchemaOrg, 'byArtist'),
  memberOf: createNamedNode(ns.SchemaOrg, 'memberOf'),
};

const Person = {
  DannyMeyer: DataFactory.blankNode('DannyMeyer'),
  SimoneSimons: DataFactory.blankNode('SimoneSimons'),
  UlliPerhonen: DataFactory.blankNode('UlliPerhonen'),
  ZoraCock: DataFactory.blankNode('ZoraCock'),
};

const Band = {
  Blackbriar: DataFactory.blankNode('Blackbriar'),
  Epica: DataFactory.blankNode('Epica'),
  Oversense: DataFactory.blankNode('Oversense'),
  SnowWhiteBlood: DataFactory.blankNode('SnowWhiteBlood'),
  Stimmgewalt: DataFactory.blankNode('Stemmgewalt'),
};

const Song = {
  Be: DataFactory.blankNode('Be'),
  CanvasOfLife: DataFactory.blankNode('CanvasOfLife'),
  MortalRemains: DataFactory.blankNode('MortalRemains'),
  Selkie: DataFactory.blankNode('Selkie'),
  SnowWhiteAndRoseRed: DataFactory.blankNode('SnowWhiteAndRoseRed'),
  TidesOfTime: DataFactory.blankNode('TidesOfTime'),
  WildHunt: DataFactory.blankNode('WildHunt'),
  YouBelongToMe: DataFactory.blankNode('YouBelongToMe'),
};

/**
 * Populates store with default data.
 *
 * @param {N3.Store} store
 * @return {import('force-graph').GraphData}
 */
function populateStore(store) {
  // Add band memberships
  store.addQuad(Person.DannyMeyer, SchemaOrg.memberOf, Band.Oversense);
  store.addQuad(Person.SimoneSimons, SchemaOrg.memberOf, Band.Epica);
  store.addQuad(Person.UlliPerhonen, SchemaOrg.memberOf, Band.SnowWhiteBlood);
  store.addQuad(Person.ZoraCock, SchemaOrg.memberOf, Band.Blackbriar);

  // Add song artists
  store.addQuad(Song.Be, SchemaOrg.byArtist, Band.Oversense);
  store.addQuad(Song.CanvasOfLife, SchemaOrg.byArtist, Band.Epica);
  store.addQuad(Song.MortalRemains, SchemaOrg.byArtist, Band.Blackbriar);
  store.addQuad(Song.Selkie, SchemaOrg.byArtist, Band.Blackbriar);
  store.addQuad(Song.SnowWhiteAndRoseRed, SchemaOrg.byArtist, Band.Blackbriar);
  store.addQuad(
    Song.SnowWhiteAndRoseRed,
    SchemaOrg.byArtist,
    Band.SnowWhiteBlood
  );
  store.addQuad(Song.TidesOfTime, SchemaOrg.byArtist, Band.Epica);
  store.addQuad(Song.WildHunt, SchemaOrg.byArtist, Band.Oversense);
  store.addQuad(Song.YouBelongToMe, SchemaOrg.byArtist, Person.DannyMeyer);
  store.addQuad(Song.YouBelongToMe, SchemaOrg.byArtist, Band.SnowWhiteBlood);
  store.addQuad(Song.YouBelongToMe, SchemaOrg.byArtist, Band.Stimmgewalt);
}

export default populateStore;
