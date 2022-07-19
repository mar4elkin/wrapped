interface track {
  id: number;
  timestamp: Date;
  album_id: number|null;
  play_count: number|null;
  recent: null;
  chart: null;
  track: null;
}

interface owner {
  uid: number;
  login: string;
  name: string;
  display_name: string|null;
  full_name: string|null;
  verified: boolean;
  regions: null;
}

interface cover {
  type: string|boolean|null;
  uri: string|boolean|null;
  items_uri: string|boolean|null;
  dir: string|boolean|null;
  version: string|boolean|null;
  custom: boolean;
  is_custom: string|boolean|null;
  copyright_name: string|boolean|null;
  copyright_cline: string|boolean|null;
  prefix: string|boolean|null;
  error: string|boolean|null;
}

interface coverWithoutText {
  type: string|boolean|null;
  uri: string|boolean|null;
  items_uri: string|boolean|null;
  dir: string|boolean|null;
  version: string|boolean|null;
  custom: boolean;
  is_custom: string|boolean|null;
  copyright_name: string|boolean|null;
  copyright_cline: string|boolean|null;
  prefix: string|boolean|null;
  error: string|boolean|null;
}

interface madeFor {
  user_info: {
    uid: number;
    login: string;
    name: string;
    display_name: string|null;
    full_name: string|null;
    sex: string|null;
    verified: boolean;
    regions: null;
  };
  case_forms: {
    nominative: string|null;
    genitive: string|null;
    dative: string|null;
    accusative: string|null;
    instrumental: string|null;
    prepositional: string|null;
  };
}

interface data {
  owner: owner;
  cover: cover;
  made_for: madeFor;
  play_counter: null;
  playlist_absence: null;
  uid: number;
  kind: number;
  title: string;
  track_count: number;
  tags: Array<object>;
  revision: number;
  snapshot: number;
  visibility: string;
  collective: boolean;
  url_part: string;
  created: Date;
  modified: Date;
  available: boolean;
  is_banner: boolean;
  is_premiere: boolean;
  duration_ms: number;
  og_image: string;
  og_title: string;
  og_description: string;
  image: string|null;
  cover_without_text: coverWithoutText;
  contest: string|null;
  background_color: string|null;
  text_color: string|null;
  id_for_from: string|null;
  dummy_description: string|null;
  dummy_page_description: string|null;
  dummy_cover: string|null;
  dummy_rollover_cover: string|null;
  og_data: string|null;
  branding: string|null;
  metrika_id: string|number|null;
  coauthors: null;
  top_artist: Array<object>;
  recent_tracks: Array<object>;
  prerolls: null;
  likes_count: null|number;
  similar_playlists: Array<object>;
  last_owner_playlists: Array<object>;
  generated_playlist_type: string;
  animated_cover_uri: string|null;
  ever_played: boolean;
  description: string;
  description_formatted: string;
  playlist_uuid: number;
  type: null;
  ready: null;
  is_for_from: null;
  regions: null;
  tracks: Array<track>;
}

export interface GenPlaylists {
    data: data;
    type: string;
    ready: boolean;
    notify: boolean;
    description: null;
  }
  