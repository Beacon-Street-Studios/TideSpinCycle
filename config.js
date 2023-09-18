var config = {}

config.duration = 4.0;

// Example: {image: 'ding.png', file: 'bss_eggo_dingthing_ding_', count:17, min: 1.5, max: 3.0},
config.voices = [
    {image: 'logo.png', file: 'bss_tide_spincycle_vocals_', count:20, min: 0, max: 1.5},
    {image: 'ding.png', file: 'bss_eggo_dingthing_ding_', count:17, min: 1.5, max: 3.0},  
    {image: 'waffle.png', file: 'bss_eggo_dingthing_waffle_', count:6, min: 3.0}, 
    {image: 'leggo.png', file: 'bss_eggo_dingthing_leggo_', count:11}
];

config.voiceCount = config.voices.length;

// Order of precedence: image, color, default gray (if undefined)
config.backgroundColor = '#FFD126';
// config.backgroundImage = 'lukas-blazek-EWDvHNNfUmQ-unsplash.jpg';
