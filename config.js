var config = {}

config.duration = 4.0;

// Example: {image: 'ding.png', file: 'bss_eggo_dingthing_ding_', count:17, min: 1.5, max: 3.0},
config.voices = [
    {image: 'vocals.png', file: 'bss_tide_spincycle_vocals_', count:20, min: 1, max: 3.5},
    {image: 'swell.png', file: 'bss_tide_spincycle_swell_', count:14, min: 0, max: 1.5},  
    {image: 'chime.png', file: 'bss_tide_spincycle_chime_', count:9, min: 1.5, max: 3.5}, 
    {image: 'melody.png', file: 'bss_tide_spincycle_melody_', count:21, min: 1.5, max: 3.5},
    {image: 'sfx.png', file: 'bss_tide_spincycle_sfx_', count:12, min: 0, max: 1.5}
];

config.voiceCount = config.voices.length;

// Order of precedence: image, color, default gray (if undefined)
config.backgroundColor = '#EB3E0A';
config.backgroundImage = 'wallpaper.png';
