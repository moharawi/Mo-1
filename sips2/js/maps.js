var marker = null;
var map = null;
var riyadh = null;
var ksa_s = null;
var asir_s = null;
var baha_s = null;
var shamaliyah_s = null;
var jawf_s, madinah_s = null;
var qasim_s = null;
var qurayyat_s = null;
var riyad_s = null;
var sharqiyah_s = null;
var hail_s = null;
var jizan_s = null;
var makkah_s = null;
var najran_s = null;
var tabuk_s = null;

var infoWindow = null;
var infoWindow1 = null;


var heatMap = null;
var heatMap1 = null;
var heatMap1_2 = null;
var heatMap2 = null;
var heatMap4 = null;
var Dataheatmap = null;
var dsalArray = new Array();
var XYdsal = new Array();
var dsalPoints = [];
var dsalPoints2 = [];
var dsalPoints4 = [];
var powerArray = new Array();
var XYpower = new Array();
var powerPoints = [];

heatMapData = [
        new google.maps.LatLng(37.782551, -122.445368),
        new google.maps.LatLng(37.782745, -122.444586),
        new google.maps.LatLng(37.782842, -122.443688),
        new google.maps.LatLng(37.782919, -122.442815),
        new google.maps.LatLng(37.782992, -122.442112),
        new google.maps.LatLng(37.783100, -122.441461),
        new google.maps.LatLng(37.783206, -122.440829),
        new google.maps.LatLng(37.783273, -122.440324),
        new google.maps.LatLng(37.783316, -122.440023),
        new google.maps.LatLng(37.783357, -122.439794),
        new google.maps.LatLng(37.783371, -122.439687),
        new google.maps.LatLng(37.783368, -122.439666),
        new google.maps.LatLng(37.783383, -122.439594),
        new google.maps.LatLng(37.783508, -122.439525),
        new google.maps.LatLng(37.783842, -122.439591),
        new google.maps.LatLng(37.784147, -122.439668),
        new google.maps.LatLng(37.784206, -122.439686),
        new google.maps.LatLng(37.784386, -122.439790),
        new google.maps.LatLng(37.784701, -122.439902),
        new google.maps.LatLng(37.784965, -122.439938),
        new google.maps.LatLng(37.785010, -122.439947),
        new google.maps.LatLng(37.785360, -122.439952),
        new google.maps.LatLng(37.785715, -122.440030),
        new google.maps.LatLng(37.786117, -122.440119),
        new google.maps.LatLng(37.786564, -122.440209),
        new google.maps.LatLng(37.786905, -122.440270),
        new google.maps.LatLng(37.786956, -122.440279),
        new google.maps.LatLng(37.800224, -122.433520),
        new google.maps.LatLng(37.800155, -122.434101),
        new google.maps.LatLng(37.800160, -122.434430),
        new google.maps.LatLng(37.800378, -122.434527),
        new google.maps.LatLng(37.800738, -122.434598),
        new google.maps.LatLng(37.800938, -122.434650),
        new google.maps.LatLng(37.801024, -122.434889),
        new google.maps.LatLng(37.800955, -122.435392),
        new google.maps.LatLng(37.800886, -122.435959),
        new google.maps.LatLng(37.800811, -122.436275),
        new google.maps.LatLng(37.800788, -122.436299),
        new google.maps.LatLng(37.800719, -122.436302),
        new google.maps.LatLng(37.800702, -122.436298),
        new google.maps.LatLng(37.800661, -122.436273),
        new google.maps.LatLng(37.800395, -122.436172),
        new google.maps.LatLng(37.800228, -122.436116),
        new google.maps.LatLng(37.800169, -122.436130),
        new google.maps.LatLng(37.800066, -122.436167),
        new google.maps.LatLng(37.784345, -122.422922),
        new google.maps.LatLng(37.784389, -122.422926),
        new google.maps.LatLng(37.784437, -122.422924),
        new google.maps.LatLng(37.784746, -122.422818),
        new google.maps.LatLng(37.785436, -122.422959),
        new google.maps.LatLng(37.786120, -122.423112),
        new google.maps.LatLng(37.786433, -122.423029),
        new google.maps.LatLng(37.786631, -122.421213),
        new google.maps.LatLng(37.786660, -122.421033),
        new google.maps.LatLng(37.786801, -122.420141),
        new google.maps.LatLng(37.786823, -122.420034),
        new google.maps.LatLng(37.786831, -122.419916),
        new google.maps.LatLng(37.787034, -122.418208),
        new google.maps.LatLng(37.787056, -122.418034),
        new google.maps.LatLng(37.787169, -122.417145),
        new google.maps.LatLng(37.787217, -122.416715),
        new google.maps.LatLng(37.786144, -122.416403),
        new google.maps.LatLng(37.785292, -122.416257),
        new google.maps.LatLng(37.780666, -122.390374),
        new google.maps.LatLng(37.780501, -122.391281),
        new google.maps.LatLng(37.780148, -122.392052),
        new google.maps.LatLng(37.780173, -122.391148),
        new google.maps.LatLng(37.780693, -122.390592),
        new google.maps.LatLng(37.781261, -122.391142),
        new google.maps.LatLng(37.781808, -122.391730),
        new google.maps.LatLng(37.782340, -122.392341),
        new google.maps.LatLng(37.782812, -122.393022),
        new google.maps.LatLng(37.783300, -122.393672),
        new google.maps.LatLng(37.783809, -122.394275),
        new google.maps.LatLng(37.784246, -122.394979),
        new google.maps.LatLng(37.784791, -122.395958),
        new google.maps.LatLng(37.785675, -122.396746),
        new google.maps.LatLng(37.786262, -122.395780),
        new google.maps.LatLng(37.786776, -122.395093),
        new google.maps.LatLng(37.787282, -122.394426),
        new google.maps.LatLng(37.787783, -122.393767),
        new google.maps.LatLng(37.788343, -122.393184),
        new google.maps.LatLng(37.788895, -122.392506),
        new google.maps.LatLng(37.789371, -122.391701),
        new google.maps.LatLng(37.789722, -122.390952),
        new google.maps.LatLng(37.790315, -122.390305),
        new google.maps.LatLng(37.790738, -122.389616),
        new google.maps.LatLng(37.779448, -122.438702),
        new google.maps.LatLng(37.779023, -122.438585),
        new google.maps.LatLng(37.778542, -122.438492),
        new google.maps.LatLng(37.778100, -122.438411),
        new google.maps.LatLng(37.777986, -122.438376),
        new google.maps.LatLng(37.777680, -122.438313),
        new google.maps.LatLng(37.777316, -122.438273),
        new google.maps.LatLng(37.777135, -122.438254),
        new google.maps.LatLng(37.776987, -122.438303),
        new google.maps.LatLng(37.776946, -122.438404),
        new google.maps.LatLng(37.776944, -122.438467),
        new google.maps.LatLng(37.776892, -122.438459),
        new google.maps.LatLng(37.776842, -122.438442),
        new google.maps.LatLng(37.776822, -122.438391),
        new google.maps.LatLng(37.776814, -122.438412),
        new google.maps.LatLng(37.776787, -122.438628),
        new google.maps.LatLng(37.776729, -122.438650),
        new google.maps.LatLng(37.776759, -122.438677),
        new google.maps.LatLng(37.776772, -122.438498),
        new google.maps.LatLng(37.776787, -122.438389),
        new google.maps.LatLng(37.776848, -122.438283),
        new google.maps.LatLng(37.776870, -122.438239),
        new google.maps.LatLng(37.777015, -122.438198),
        new google.maps.LatLng(37.777333, -122.438256),
        new google.maps.LatLng(37.777595, -122.438308),
        new google.maps.LatLng(37.777797, -122.438344),
        new google.maps.LatLng(37.778160, -122.438442),
        new google.maps.LatLng(37.778414, -122.438508),
        new google.maps.LatLng(37.778445, -122.438516),
        new google.maps.LatLng(37.778503, -122.438529),
        new google.maps.LatLng(37.778607, -122.438549),
        new google.maps.LatLng(37.778670, -122.438644),
        new google.maps.LatLng(37.778847, -122.438706),
        new google.maps.LatLng(37.779240, -122.438744),
        new google.maps.LatLng(37.779738, -122.438822),
        new google.maps.LatLng(37.780201, -122.438882),
        new google.maps.LatLng(37.780400, -122.438905),
        new google.maps.LatLng(37.780501, -122.438921),
        new google.maps.LatLng(37.780892, -122.438986),
        new google.maps.LatLng(37.781446, -122.439087),
        new google.maps.LatLng(37.781985, -122.439199),
        new google.maps.LatLng(37.782239, -122.439249),
        new google.maps.LatLng(37.782286, -122.439266),
        new google.maps.LatLng(37.797847, -122.429388),
        new google.maps.LatLng(37.797874, -122.429180),
        new google.maps.LatLng(37.797885, -122.429069),
        new google.maps.LatLng(37.797887, -122.429050),
        new google.maps.LatLng(37.797933, -122.428954),
        new google.maps.LatLng(37.798242, -122.428990),
        new google.maps.LatLng(37.798617, -122.429075),
        new google.maps.LatLng(37.798719, -122.429092),
        new google.maps.LatLng(37.798944, -122.429145),
        new google.maps.LatLng(37.799320, -122.429251),
        new google.maps.LatLng(37.799590, -122.429309),
        new google.maps.LatLng(37.799677, -122.429324),
        new google.maps.LatLng(37.799966, -122.429360),
        new google.maps.LatLng(37.800288, -122.429430),
        new google.maps.LatLng(37.800443, -122.429461),
        new google.maps.LatLng(37.800465, -122.429474),
        new google.maps.LatLng(37.800644, -122.429540),
        new google.maps.LatLng(37.800948, -122.429620),
        new google.maps.LatLng(37.801242, -122.429685),
        new google.maps.LatLng(37.801375, -122.429702),
        new google.maps.LatLng(37.801400, -122.429703),
        new google.maps.LatLng(37.801453, -122.429707),
        new google.maps.LatLng(37.801473, -122.429709),
        new google.maps.LatLng(37.801532, -122.429707),
        new google.maps.LatLng(37.801852, -122.429729),
        new google.maps.LatLng(37.802173, -122.429789),
        new google.maps.LatLng(37.802459, -122.429847),
        new google.maps.LatLng(37.802554, -122.429825),
        new google.maps.LatLng(37.802647, -122.429549),
        new google.maps.LatLng(37.802693, -122.429179),
        new google.maps.LatLng(37.802729, -122.428751),
        new google.maps.LatLng(37.766104, -122.409291),
        new google.maps.LatLng(37.766103, -122.409268),
        new google.maps.LatLng(37.766138, -122.409229),
        new google.maps.LatLng(37.766183, -122.409231),
        new google.maps.LatLng(37.766153, -122.409276),
        new google.maps.LatLng(37.766005, -122.409365),
        new google.maps.LatLng(37.765897, -122.409570),
        new google.maps.LatLng(37.765767, -122.409739),
        new google.maps.LatLng(37.765693, -122.410389),
        new google.maps.LatLng(37.765615, -122.411201),
        new google.maps.LatLng(37.765533, -122.412121),
        new google.maps.LatLng(37.765467, -122.412939),
        new google.maps.LatLng(37.765444, -122.414821),
        new google.maps.LatLng(37.765444, -122.414964),
        new google.maps.LatLng(37.765318, -122.415424),
        new google.maps.LatLng(37.763961, -122.415296),
        new google.maps.LatLng(37.763115, -122.415196),
        new google.maps.LatLng(37.762967, -122.415183),
        new google.maps.LatLng(37.762278, -122.415127),
        new google.maps.LatLng(37.761675, -122.415055),
        new google.maps.LatLng(37.760932, -122.414988),
        new google.maps.LatLng(37.759337, -122.414862),
        new google.maps.LatLng(37.773187, -122.421922),
        new google.maps.LatLng(37.773043, -122.422118),
        new google.maps.LatLng(37.773007, -122.422165),
        new google.maps.LatLng(37.772979, -122.422219),
        new google.maps.LatLng(37.772865, -122.422394),
        new google.maps.LatLng(37.772779, -122.422503),
        new google.maps.LatLng(37.772676, -122.422701),
        new google.maps.LatLng(37.772606, -122.422806),
        new google.maps.LatLng(37.772566, -122.422840),
        new google.maps.LatLng(37.772508, -122.422852),
        new google.maps.LatLng(37.772387, -122.423011),
        new google.maps.LatLng(37.772099, -122.423328),
        new google.maps.LatLng(37.771704, -122.423783),
        new google.maps.LatLng(37.771481, -122.424081),
        new google.maps.LatLng(37.771400, -122.424179),
        new google.maps.LatLng(37.771352, -122.424220),
        new google.maps.LatLng(37.771248, -122.424327),
        new google.maps.LatLng(37.770904, -122.424781),
        new google.maps.LatLng(37.770520, -122.425283),
        new google.maps.LatLng(37.770337, -122.425553),
        new google.maps.LatLng(37.770128, -122.425832),
        new google.maps.LatLng(37.769756, -122.426331),
        new google.maps.LatLng(37.769300, -122.426902),
        new google.maps.LatLng(37.769132, -122.427065),
        new google.maps.LatLng(37.769092, -122.427103),
        new google.maps.LatLng(37.768979, -122.427172),
        new google.maps.LatLng(37.768595, -122.427634),
        new google.maps.LatLng(37.768372, -122.427913),
        new google.maps.LatLng(37.768337, -122.427961),
        new google.maps.LatLng(37.768244, -122.428138),
        new google.maps.LatLng(37.767942, -122.428581),
        new google.maps.LatLng(37.767482, -122.429094),
        new google.maps.LatLng(37.767031, -122.429606),
        new google.maps.LatLng(37.766732, -122.429986),
        new google.maps.LatLng(37.766680, -122.430058),
        new google.maps.LatLng(37.766633, -122.430109),
        new google.maps.LatLng(37.766580, -122.430211),
        new google.maps.LatLng(37.766367, -122.430594),
        new google.maps.LatLng(37.765910, -122.431137),
        new google.maps.LatLng(37.765353, -122.431806),
        new google.maps.LatLng(37.764962, -122.432298),
        new google.maps.LatLng(37.764868, -122.432486),
        new google.maps.LatLng(37.764518, -122.432913),
        new google.maps.LatLng(37.763435, -122.434173),
        new google.maps.LatLng(37.762847, -122.434953),
        new google.maps.LatLng(37.762291, -122.435935),
        new google.maps.LatLng(37.762224, -122.436074),
        new google.maps.LatLng(37.761957, -122.436892),
        new google.maps.LatLng(37.761652, -122.438886),
        new google.maps.LatLng(37.761284, -122.439955),
        new google.maps.LatLng(37.761210, -122.440068),
        new google.maps.LatLng(37.761064, -122.440720),
        new google.maps.LatLng(37.761040, -122.441411),
        new google.maps.LatLng(37.761048, -122.442324),
        new google.maps.LatLng(37.760851, -122.443118),
        new google.maps.LatLng(37.759977, -122.444591),
        new google.maps.LatLng(37.759913, -122.444698),
        new google.maps.LatLng(37.759623, -122.445065),
        new google.maps.LatLng(37.758902, -122.445158),
        new google.maps.LatLng(37.758428, -122.444570),
        new google.maps.LatLng(37.757687, -122.443340),
        new google.maps.LatLng(37.757583, -122.443240),
        new google.maps.LatLng(37.757019, -122.442787),
        new google.maps.LatLng(37.756603, -122.442322),
        new google.maps.LatLng(37.756380, -122.441602),
        new google.maps.LatLng(37.755790, -122.441382),
        new google.maps.LatLng(37.754493, -122.442133),
        new google.maps.LatLng(37.754361, -122.442206),
        new google.maps.LatLng(37.753719, -122.442650),
        new google.maps.LatLng(37.753096, -122.442915),
        new google.maps.LatLng(37.751617, -122.443211),
        new google.maps.LatLng(37.751496, -122.443246),
        new google.maps.LatLng(37.750733, -122.443428),
        new google.maps.LatLng(37.750126, -122.443536),
        new google.maps.LatLng(37.750103, -122.443784),
        new google.maps.LatLng(37.750390, -122.444010),
        new google.maps.LatLng(37.750448, -122.444013),
        new google.maps.LatLng(37.750536, -122.444040),
        new google.maps.LatLng(37.750493, -122.444141),
        new google.maps.LatLng(37.790859, -122.402808),
        new google.maps.LatLng(37.790864, -122.402768),
        new google.maps.LatLng(37.790995, -122.402539),
        new google.maps.LatLng(37.791148, -122.402172),
        new google.maps.LatLng(37.791385, -122.401312),
        new google.maps.LatLng(37.791405, -122.400776),
        new google.maps.LatLng(37.791288, -122.400528),
        new google.maps.LatLng(37.791113, -122.400441),
        new google.maps.LatLng(37.791027, -122.400395),
        new google.maps.LatLng(37.791094, -122.400311),
        new google.maps.LatLng(37.791211, -122.400183),
        new google.maps.LatLng(37.791060, -122.399334),
        new google.maps.LatLng(37.790538, -122.398718),
        new google.maps.LatLng(37.790095, -122.398086),
        new google.maps.LatLng(37.789644, -122.397360),
        new google.maps.LatLng(37.789254, -122.396844),
        new google.maps.LatLng(37.788855, -122.396397),
        new google.maps.LatLng(37.788483, -122.395963),
        new google.maps.LatLng(37.788015, -122.395365),
        new google.maps.LatLng(37.787558, -122.394735),
        new google.maps.LatLng(37.787472, -122.394323),
        new google.maps.LatLng(37.787630, -122.394025),
        new google.maps.LatLng(37.787767, -122.393987),
        new google.maps.LatLng(37.787486, -122.394452),
        new google.maps.LatLng(37.786977, -122.395043),
        new google.maps.LatLng(37.786583, -122.395552),
        new google.maps.LatLng(37.786540, -122.395610),
        new google.maps.LatLng(37.786516, -122.395659),
        new google.maps.LatLng(37.786378, -122.395707),
        new google.maps.LatLng(37.786044, -122.395362),
        new google.maps.LatLng(37.785598, -122.394715),
        new google.maps.LatLng(37.785321, -122.394361),
        new google.maps.LatLng(37.785207, -122.394236),
        new google.maps.LatLng(37.785751, -122.394062),
        new google.maps.LatLng(37.785996, -122.393881),
        new google.maps.LatLng(37.786092, -122.393830),
        new google.maps.LatLng(37.785998, -122.393899),
        new google.maps.LatLng(37.785114, -122.394365),
        new google.maps.LatLng(37.785022, -122.394441),
        new google.maps.LatLng(37.784823, -122.394635),
        new google.maps.LatLng(37.784719, -122.394629),
        new google.maps.LatLng(37.785069, -122.394176),
        new google.maps.LatLng(37.785500, -122.393650),
        new google.maps.LatLng(37.785770, -122.393291),
        new google.maps.LatLng(37.785839, -122.393159),
        new google.maps.LatLng(37.782651, -122.400628),
        new google.maps.LatLng(37.782616, -122.400599),
        new google.maps.LatLng(37.782702, -122.400470),
        new google.maps.LatLng(37.782915, -122.400192),
        new google.maps.LatLng(37.783137, -122.399887),
        new google.maps.LatLng(37.783414, -122.399519),
        new google.maps.LatLng(37.783629, -122.399237),
        new google.maps.LatLng(37.783688, -122.399157),
        new google.maps.LatLng(37.783716, -122.399106),
        new google.maps.LatLng(37.783798, -122.399072),
        new google.maps.LatLng(37.783997, -122.399186),
        new google.maps.LatLng(37.784271, -122.399538),
        new google.maps.LatLng(37.784577, -122.399948),
        new google.maps.LatLng(37.784828, -122.400260),
        new google.maps.LatLng(37.784999, -122.400477),
        new google.maps.LatLng(37.785113, -122.400651),
        new google.maps.LatLng(37.785155, -122.400703),
        new google.maps.LatLng(37.785192, -122.400749),
        new google.maps.LatLng(37.785278, -122.400839),
        new google.maps.LatLng(37.785387, -122.400857),
        new google.maps.LatLng(37.785478, -122.400890),
        new google.maps.LatLng(37.785526, -122.401022),
        new google.maps.LatLng(37.785598, -122.401148),
        new google.maps.LatLng(37.785631, -122.401202),
        new google.maps.LatLng(37.785660, -122.401267),
        new google.maps.LatLng(37.803986, -122.426035),
        new google.maps.LatLng(37.804102, -122.425089),
        new google.maps.LatLng(37.804211, -122.424156),
        new google.maps.LatLng(37.803861, -122.423385),
        new google.maps.LatLng(37.803151, -122.423214),
        new google.maps.LatLng(37.802439, -122.423077),
        new google.maps.LatLng(37.801740, -122.422905),
        new google.maps.LatLng(37.801069, -122.422785),
        new google.maps.LatLng(37.800345, -122.422649),
        new google.maps.LatLng(37.799633, -122.422603),
        new google.maps.LatLng(37.799750, -122.421700),
        new google.maps.LatLng(37.799885, -122.420854),
        new google.maps.LatLng(37.799209, -122.420607),
        new google.maps.LatLng(37.795656, -122.400395),
        new google.maps.LatLng(37.795203, -122.400304),
        new google.maps.LatLng(37.778738, -122.415584),
        new google.maps.LatLng(37.778812, -122.415189),
        new google.maps.LatLng(37.778824, -122.415092),
        new google.maps.LatLng(37.778833, -122.414932),
        new google.maps.LatLng(37.778834, -122.414898),
        new google.maps.LatLng(37.778740, -122.414757),
        new google.maps.LatLng(37.778501, -122.414433),
        new google.maps.LatLng(37.778182, -122.414026),
        new google.maps.LatLng(37.777851, -122.413623),
        new google.maps.LatLng(37.777486, -122.413166),
        new google.maps.LatLng(37.777109, -122.412674),
        new google.maps.LatLng(37.776743, -122.412186),
        new google.maps.LatLng(37.776440, -122.411800),
        new google.maps.LatLng(37.776295, -122.411614),
        new google.maps.LatLng(37.776158, -122.411440),
        new google.maps.LatLng(37.775806, -122.410997),
        new google.maps.LatLng(37.775422, -122.410484),
        new google.maps.LatLng(37.775126, -122.410087),
        new google.maps.LatLng(37.775012, -122.409854),
        new google.maps.LatLng(37.775164, -122.409573),
        new google.maps.LatLng(37.775498, -122.409180),
        new google.maps.LatLng(37.775868, -122.408730),
        new google.maps.LatLng(37.776256, -122.408240),
        new google.maps.LatLng(37.776519, -122.407928),
        new google.maps.LatLng(37.776539, -122.407904),
        new google.maps.LatLng(37.776595, -122.407854),
        new google.maps.LatLng(37.776853, -122.407547),
        new google.maps.LatLng(37.777234, -122.407087),
        new google.maps.LatLng(37.777644, -122.406558),
        new google.maps.LatLng(37.778066, -122.406017),
        new google.maps.LatLng(37.778468, -122.405499),
        new google.maps.LatLng(37.778866, -122.404995),
        new google.maps.LatLng(37.779295, -122.404455),
        new google.maps.LatLng(37.779695, -122.403950),
        new google.maps.LatLng(37.779982, -122.403584),
        new google.maps.LatLng(37.780295, -122.403223),
        new google.maps.LatLng(37.780664, -122.402766),
        new google.maps.LatLng(37.781043, -122.402288),
        new google.maps.LatLng(37.781399, -122.401823),
        new google.maps.LatLng(37.781727, -122.401407),
        new google.maps.LatLng(37.781853, -122.401247),
        new google.maps.LatLng(37.781894, -122.401195),
        new google.maps.LatLng(37.782076, -122.400977),
        new google.maps.LatLng(37.782338, -122.400603),
        new google.maps.LatLng(37.782666, -122.400133),
        new google.maps.LatLng(37.783048, -122.399634),
        new google.maps.LatLng(37.783450, -122.399198),
        new google.maps.LatLng(37.783791, -122.398998),
        new google.maps.LatLng(37.784177, -122.398959),
        new google.maps.LatLng(37.784388, -122.398971),
        new google.maps.LatLng(37.784404, -122.399128),
        new google.maps.LatLng(37.784586, -122.399524),
        new google.maps.LatLng(37.784835, -122.399927),
        new google.maps.LatLng(37.785116, -122.400307),
        new google.maps.LatLng(37.785282, -122.400539),
        new google.maps.LatLng(37.785346, -122.400692),
        new google.maps.LatLng(37.765769, -122.407201),
        new google.maps.LatLng(37.765790, -122.407414),
        new google.maps.LatLng(37.765802, -122.407755),
        new google.maps.LatLng(37.765791, -122.408219),
        new google.maps.LatLng(37.765763, -122.408759),
        new google.maps.LatLng(37.765726, -122.409348),
        new google.maps.LatLng(37.765716, -122.409882),
        new google.maps.LatLng(37.765708, -122.410202),
        new google.maps.LatLng(37.765705, -122.410253),
        new google.maps.LatLng(37.765707, -122.410369),
        new google.maps.LatLng(37.765692, -122.410720),
        new google.maps.LatLng(37.765699, -122.411215),
        new google.maps.LatLng(37.765687, -122.411789),
        new google.maps.LatLng(37.765666, -122.412373),
        new google.maps.LatLng(37.765598, -122.412883),
        new google.maps.LatLng(37.765543, -122.413039),
        new google.maps.LatLng(37.765532, -122.413125),
        new google.maps.LatLng(37.765500, -122.413553),
        new google.maps.LatLng(37.765448, -122.414053),
        new google.maps.LatLng(37.765388, -122.414645),
        new google.maps.LatLng(37.765323, -122.415250),
        new google.maps.LatLng(37.765303, -122.415847),
        new google.maps.LatLng(37.765251, -122.416439),
        new google.maps.LatLng(37.765204, -122.417020),
        new google.maps.LatLng(37.765172, -122.417556),
        new google.maps.LatLng(37.765164, -122.418075),
        new google.maps.LatLng(37.765153, -122.418618),
        new google.maps.LatLng(37.765136, -122.419112),
        new google.maps.LatLng(37.765129, -122.419378),
        new google.maps.LatLng(37.765119, -122.419481),
        new google.maps.LatLng(37.765100, -122.419852),
        new google.maps.LatLng(37.765083, -122.420349),
        new google.maps.LatLng(37.765045, -122.420930),
        new google.maps.LatLng(37.764992, -122.421481),
        new google.maps.LatLng(37.764980, -122.421695),
        new google.maps.LatLng(37.764993, -122.421843),
        new google.maps.LatLng(37.764986, -122.422255),
        new google.maps.LatLng(37.764975, -122.422823),
        new google.maps.LatLng(37.764939, -122.423411),
        new google.maps.LatLng(37.764902, -122.424014),
        new google.maps.LatLng(37.764853, -122.424576),
        new google.maps.LatLng(37.764826, -122.424922),
        new google.maps.LatLng(37.764796, -122.425375),
        new google.maps.LatLng(37.764782, -122.425869),
        new google.maps.LatLng(37.764768, -122.426089),
        new google.maps.LatLng(37.764766, -122.426117),
        new google.maps.LatLng(37.764723, -122.426276),
        new google.maps.LatLng(37.764681, -122.426649),
        new google.maps.LatLng(37.782012, -122.404200),
        new google.maps.LatLng(37.781574, -122.404911),
        new google.maps.LatLng(37.781055, -122.405597),
        new google.maps.LatLng(37.780479, -122.406341),
        new google.maps.LatLng(37.779996, -122.406939),
        new google.maps.LatLng(37.779459, -122.407613),
        new google.maps.LatLng(37.778953, -122.408228),
        new google.maps.LatLng(37.778409, -122.408839),
        new google.maps.LatLng(37.777842, -122.409501),
        new google.maps.LatLng(37.777334, -122.410181),
        new google.maps.LatLng(37.776809, -122.410836),
        new google.maps.LatLng(37.776240, -122.411514),
        new google.maps.LatLng(37.775725, -122.412145),
        new google.maps.LatLng(37.775190, -122.412805),
        new google.maps.LatLng(37.774672, -122.413464),
        new google.maps.LatLng(37.774084, -122.414186),
        new google.maps.LatLng(37.773533, -122.413636),
        new google.maps.LatLng(37.773021, -122.413009),
        new google.maps.LatLng(37.772501, -122.412371),
        new google.maps.LatLng(37.771964, -122.411681),
        new google.maps.LatLng(37.771479, -122.411078),
        new google.maps.LatLng(37.770992, -122.410477),
        new google.maps.LatLng(37.770467, -122.409801),
        new google.maps.LatLng(37.770090, -122.408904),
        new google.maps.LatLng(37.769657, -122.408103),
        new google.maps.LatLng(37.769132, -122.407276),
        new google.maps.LatLng(37.768564, -122.406469),
        new google.maps.LatLng(37.767980, -122.405745),
        new google.maps.LatLng(37.767380, -122.405299),
        new google.maps.LatLng(37.766604, -122.405297),
        new google.maps.LatLng(37.765838, -122.405200),
        new google.maps.LatLng(37.765139, -122.405139),
        new google.maps.LatLng(37.764457, -122.405094),
        new google.maps.LatLng(37.763716, -122.405142),
        new google.maps.LatLng(37.762932, -122.405398),
        new google.maps.LatLng(37.762126, -122.405813),
        new google.maps.LatLng(37.761344, -122.406215),
        new google.maps.LatLng(37.760556, -122.406495),
        new google.maps.LatLng(37.759732, -122.406484),
        new google.maps.LatLng(37.758910, -122.406228),
        new google.maps.LatLng(37.758182, -122.405695),
        new google.maps.LatLng(37.757676, -122.405118),
        new google.maps.LatLng(37.757039, -122.404346),
        new google.maps.LatLng(37.756335, -122.403719),
        new google.maps.LatLng(37.755503, -122.403406),
        new google.maps.LatLng(37.754665, -122.403242),
        new google.maps.LatLng(37.753837, -122.403172),
        new google.maps.LatLng(37.752986, -122.403112),
        new google.maps.LatLng(37.751266, -122.403355)
      ];


var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h2 id="firstHeading" class="firstHeading">Uluru</h2>'+
    '<div id="bodyContent">'+
    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    'sandstone rock formation in the southern part of the '+
    'Northern Territory, central Australia. It lies 335 km (208 mi) '+
    'south west of the nearest large town, Alice Springs; 450 km '+
    '(280 mi) by road. Kata Tjuta and Uluru are the two major '+
    'features of the Uluru - Kata Tjuta National Park. Uluru is '+
    'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
    'Aboriginal people of the area. It has many springs, waterholes, '+
    'rock caves and ancient paintings. Uluru is listed as a World '+
    'Heritage Site.</p>'+
    '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    'http://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p>'+
    '</div>'+
    '</div>';
    
    

function initialize() {
	
	initPaul()
	//loadxml()
	
	var mapContainer= document.getElementById('sim-vis-map');
	var latlng = new google.maps.LatLng(24.668546,46.701207);
	
	
	var mapOptions = {
		center:latlng,
		zoom:6,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		};
				
	
	var styleArray = [
		{
		"stylers": [
			{ "visibility": "off" },
			{ "invert_lightness": true }
			]
		},{
		"featureType": "water",
		"elementType": "geometry.fill",
		"stylers": [
			{ "visibility": "on" },
			{ "color": "#000000" }
			]
		},{
		"featureType": "water",
		"elementType": "labels.text.fill",
		"stylers": [
			{ "visibility": "on" }
			]
		},{
		"featureType": "landscape.natural",
		"elementType": "geometry.fill",
		"stylers": [
			{ "visibility": "on" },
			{ "color": "#00202a" }
			]
		},{
		"featureType": "administrative.country",
		"elementType": "geometry.stroke",
		"stylers": [
			{ "visibility": "on" },
			{ "color": "#0073ad" },
			{ "weight": 2 }
			]
		},{
		"featureType": "administrative.province",
		"elementType": "geometry.stroke",
		"stylers": [
			{ "visibility": "on" },
			{ "weight": 1 },
			{ "color": "#0b4764" }
			]
		},{
		"featureType": "administrative.country",
		"elementType": "labels.text.fill",
		"stylers": [
			{ "visibility": "on" },
			{ "color": "#0073ad" }
			]
		},{
		"featureType": "administrative.locality",
		"elementType": "labels.text.fill",
		"stylers": [
			{ "visibility": "on" },
			{ "color": "#0b4764" }
			]
		},{
	}
	];
	
	var styleArray2 = [
		{
		"stylers": [
			{ "visibility": "off" },
			{ "invert_lightness": true }
			]
		},{
		"featureType": "water",
		"elementType": "geometry.fill",
		"stylers": [
			{ "visibility": "on" },
			{ "color": "#f8f8f8" }
			]
		},{
		"featureType": "water",
		"elementType": "labels.text.fill",
		"stylers": [
			{ "visibility": "on" }
			]
		},{
		"featureType": "landscape.natural",
		"elementType": "geometry.fill",
		"stylers": [
			{ "visibility": "on" },
			{ "color": "#e0e0e0" }
			]
		},{
		"featureType": "administrative.country",
		"elementType": "geometry.stroke",
		"stylers": [
			{ "visibility": "on" },
			{ "color": "#666666" },
			{ "weight": 2 }
			]
		},{
		"featureType": "administrative.province",
		"elementType": "geometry.stroke",
		"stylers": [
			{ "visibility": "on" },
			{ "weight": 1 },
			{ "color": "#999999" }
			]
		},{
		"featureType": "administrative.country",
		"elementType": "labels.text.fill",
		"stylers": [
			{ "visibility": "on" },
			{ "color": "#666666" }
			]
		},{
		"featureType": "administrative.locality",
		"elementType": "labels.text.fill",
		"stylers": [
			{ "visibility": "on" },
			{ "color": "#999999" }
			]
		},{
	}
	];
				
	map = new google.maps.Map(mapContainer, mapOptions);
	map.setOptions({styles: styleArray2});
	
	
	var pointArray1 = new google.maps.MVCArray(dsalPoints);
	var pointArray1_2 = new google.maps.MVCArray(dsalPoints2);
	var pointArray4 = new google.maps.MVCArray(dsalPoints4);
	var pointArray2 = new google.maps.MVCArray(powerPoints);
	
	heatmap1 = new google.maps.visualization.HeatmapLayer({
          data: pointArray1,
        });
        
    heatmap1_2 = new google.maps.visualization.HeatmapLayer({
          data: pointArray1_2,
          radius: 50
        });
        
    heatmap2 = new google.maps.visualization.HeatmapLayer({
          data: pointArray2
        });
        
     heatmap4 = new google.maps.visualization.HeatmapLayer({
          data: pointArray4,
          radius: 30
        });

       // heatmap.setMap(map);
       
    
				
	marker = new google.maps.Marker({
		position: latlng,
		title:"Hello World!",
		draggable:true,
		animation: google.maps.Animation.DROP,
		});
		
		
	// To add the marker to the map, call setMap();
	//marker.setMap(map);
	var marker2 = new google.maps.Marker({
		position: latlng,
		title:"Hello World!",
		draggable:true,
		animation: google.maps.Animation.DROP,
		});
		
		
	infoWindow = new google.maps.InfoWindow({
    	content: contentString,
    	position: latlng,
    	pixelOffset: [10,20],
    });
	
	infoWindow1 = new google.maps.InfoWindow({
    	content: contentString
    });
    
    
    
    
    
  
    
    


	google.maps.event.addListener(marker, 'click', toggleBounce);
	
	ksa_s = new google.maps.Polygon({
    paths: pointsg1,
    strokeColor: "#086D03",
    strokeOpacity: 0,
    strokeWeight: 1,
    fillColor: "#f0f0f0",//fac20a
    fillOpacity: 0.0
    });

    asir_s = new google.maps.Polygon({
    paths: pointsg2,
    strokeColor: "#086D03",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#f0f0f0",//fac20a
    fillOpacity: 0.0
    });
    
    baha_s = new google.maps.Polygon({
    paths: pointsg3,
    strokeColor: "#086D03",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#f0f0f0",//fac20a
    fillOpacity: 0.0
    });
    
    shamaliyah_s = new google.maps.Polygon({
    paths: pointsg4,
    strokeColor: "#086D03",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#f0f0f0",//fac20a
    fillOpacity: 0.0
    });
    
    jawf_s = new google.maps.Polygon({
    paths: pointsg5,
    strokeColor: "#086D03",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#f0f0f0",//fac20a
    fillOpacity: 0.0
    });
    
    
    
    madinah_s = new google.maps.Polygon({
    paths: pointsg6,
    strokeColor: "#086D03",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#f0f0f0",//fac20a
    fillOpacity: 0.0
    });
    
    qasim_s = new google.maps.Polygon({
    paths: pointsg7,
    strokeColor: "#086D03",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#f0f0f0",//fac20a
    fillOpacity: 0.0
    });
    
    qurayyat_s = new google.maps.Polygon({
    paths: pointsg8,
    strokeColor: "#086D03",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#f0f0f0",//fac20a
    fillOpacity: 0.0
    });
    
    riyad_s = new google.maps.Polygon({
    paths: pointsg9,
    strokeColor: "#086D03",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#f0f0f0",//fac20a
    fillOpacity: 0.0
    });
    
    sharqiyah_s = new google.maps.Polygon({
    paths: pointsg10,
    strokeColor: "#086D03",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#f0f0f0",//fac20a
    fillOpacity: 0.0
    });
    
    
    
    hail_s = new google.maps.Polygon({
    paths: pointsg11,
    strokeColor: "#086D03",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#f0f0f0",//fac20a
    fillOpacity: 0.0
    });
    
    jizan_s = new google.maps.Polygon({
    paths: pointsg12,
    strokeColor: "#086D03",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#f0f0f0",//fac20a
    fillOpacity: 0.0
    });
    
    makkah_s = new google.maps.Polygon({
    paths: pointsg13,
    strokeColor: "#086D03",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#f0f0f0",//fac20a
    fillOpacity: 0.0
    });
    
    najran_s = new google.maps.Polygon({
    paths: pointsg14,
    strokeColor: "#086D03",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#f0f0f0",//fac20a
    fillOpacity: 0.0
    });
    
    tabuk_s = new google.maps.Polygon({
    paths: pointsg15,
    strokeColor: "#086D03",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#f0f0f0",//fac20a
    fillOpacity: 0.0
    });
    
    
    //ksa_s asir_s baha_s shamaliyah_s jawf_s madinah_s qasim_s qurayyat_s riyad_s sharqiyah_s hail_s jizan_s makkah_s najran_s tabuk_s
    //riyadh.setMap(map);
    //ksa_s.setMap(map);
    asir_s.setMap(map);
    baha_s.setMap(map);
    shamaliyah_s.setMap(map);
    jawf_s.setMap(map);
    
    madinah_s.setMap(map);
    qasim_s.setMap(map);
    qurayyat_s.setMap(map);
    riyad_s.setMap(map);
    sharqiyah_s.setMap(map);
    
    hail_s.setMap(map);
    jizan_s.setMap(map);
    makkah_s.setMap(map);
    najran_s.setMap(map);
    tabuk_s.setMap(map);
   // setTimeout(function(){
    
		
//		riyadh.setOptions({fillColor: '#00ff00'});
		   
  //  }, 5000);
    /*
    google.maps.event.addListener(ksa_s, 'mouseover', function(){
	   //infoWindow1.open(map,marker2);
	   this.setOptions({fillOpacity: 0.2, fillColor: "#ffffff"});
	   
    });
    google.maps.event.addListener(ksa_s, 'mouseout', function(){
	   //infoWindow1.close();
	   this.setOptions({fillOpacity: 0.7, fillColor: "#000000"});
    });
    */
    google.maps.event.addListener(asir_s, 'mouseover', function(){
	   //infoWindow1.open(map,marker2);
	   this.setOptions({fillOpacity: 0.7, fillColor: "#ffffff"});
	   
    });
    google.maps.event.addListener(asir_s, 'mouseout', function(){
	   //infoWindow1.close();
	   this.setOptions({fillOpacity: 0.0, fillColor: "#f0f0f0"});
    });
    
    google.maps.event.addListener(baha_s, 'mouseover', function(){
	   //infoWindow1.open(map,marker2);
	   this.setOptions({fillOpacity: 0.7, fillColor: "#ffffff"});
	   
    });
    google.maps.event.addListener(baha_s, 'mouseout', function(){
	   //infoWindow1.close();
	   this.setOptions({fillOpacity: 0.0, fillColor: "#f0f0f0"});
    });
    
    google.maps.event.addListener(shamaliyah_s, 'mouseover', function(){
	   //infoWindow1.open(map,marker2);
	   this.setOptions({fillOpacity: 0.7, fillColor: "#ffffff"});
	   
    });
    google.maps.event.addListener(shamaliyah_s, 'mouseout', function(){
	   //infoWindow1.close();
	   this.setOptions({fillOpacity: 0.0, fillColor: "#f0f0f0"});
    });
    
    google.maps.event.addListener(jawf_s, 'mouseover', function(){
	   //infoWindow1.open(map,marker2);
	   this.setOptions({fillOpacity: 0.7, fillColor: "#ffffff"});
	   
    });
    google.maps.event.addListener(jawf_s, 'mouseout', function(){
	   //infoWindow1.close();
	   this.setOptions({fillOpacity: 0.0, fillColor: "#f0f0f0"});
    });
    
    
    
    
    
    google.maps.event.addListener(madinah_s, 'mouseover', function(){
	   //infoWindow1.open(map,marker2);
	   this.setOptions({fillOpacity: 0.7, fillColor: "#ffffff"});
	   
    });
    google.maps.event.addListener(madinah_s, 'mouseout', function(){
	   //infoWindow1.close();
	   this.setOptions({fillOpacity: 0.0, fillColor: "#f0f0f0"});
    });
    
    google.maps.event.addListener(qasim_s, 'mouseover', function(){
	   //infoWindow1.open(map,marker2);
	   this.setOptions({fillOpacity: 0.7, fillColor: "#ffffff"});
	   
    });
    google.maps.event.addListener(qasim_s, 'mouseout', function(){
	   //infoWindow1.close();
	   this.setOptions({fillOpacity: 0.0, fillColor: "#f0f0f0"});
    });
    
    google.maps.event.addListener(qurayyat_s, 'mouseover', function(){
	   //infoWindow1.open(map,marker2);
	   this.setOptions({fillOpacity: 0.7, fillColor: "#ffffff"});
	   
    });
    google.maps.event.addListener(qurayyat_s, 'mouseout', function(){
	   //infoWindow1.close();
	   this.setOptions({fillOpacity: 0.0, fillColor: "#f0f0f0"});
    });
    
    google.maps.event.addListener(riyad_s, 'mouseover', function(){
	   //infoWindow1.open(map,marker2);
	   this.setOptions({fillOpacity: 0.7, fillColor: "#ffffff"});
	   
    });
    google.maps.event.addListener(riyad_s, 'mouseout', function(){
	   //infoWindow1.close();
	   this.setOptions({fillOpacity: 0.0, fillColor: "#f0f0f0"});
    });
    
    google.maps.event.addListener(sharqiyah_s, 'mouseover', function(){
	   //infoWindow1.open(map,marker2);
	   this.setOptions({fillOpacity: 0.7, fillColor: "#ffffff"});
	   
    });
    google.maps.event.addListener(sharqiyah_s, 'mouseout', function(){
	   //infoWindow1.close();
	   this.setOptions({fillOpacity: 0.0, fillColor: "#f0f0f0"});
    });
    
    
    
    
    
    google.maps.event.addListener(hail_s, 'mouseover', function(){
	   //infoWindow1.open(map,marker2);
	   this.setOptions({fillOpacity: 0.7, fillColor: "#ffffff"});
	   
    });
    google.maps.event.addListener(hail_s, 'mouseout', function(){
	   //infoWindow1.close();
	   this.setOptions({fillOpacity: 0.0, fillColor: "#f0f0f0"});
    });
    
    google.maps.event.addListener(jizan_s, 'mouseover', function(){
	   //infoWindow1.open(map,marker2);
	   this.setOptions({fillOpacity: 0.7, fillColor: "#ffffff"});
	   
    });
    google.maps.event.addListener(jizan_s, 'mouseout', function(){
	   //infoWindow1.close();
	   this.setOptions({fillOpacity: 0.0, fillColor: "#f0f0f0"});
    });
    
    google.maps.event.addListener(makkah_s, 'mouseover', function(){
	   //infoWindow1.open(map,marker2);
	   this.setOptions({fillOpacity: 0.7, fillColor: "#ffffff"});
	   
    });
    google.maps.event.addListener(makkah_s, 'mouseout', function(){
	   //infoWindow1.close();
	   this.setOptions({fillOpacity: 0.0, fillColor: "#f0f0f0"});
    });
    
    google.maps.event.addListener(najran_s, 'mouseover', function(){
	   //infoWindow1.open(map,marker2);
	   this.setOptions({fillOpacity: 0.7, fillColor: "#ffffff"});
	   
    });
    google.maps.event.addListener(najran_s, 'mouseout', function(){
	   //infoWindow1.close();
	   this.setOptions({fillOpacity: 0.0, fillColor: "#f0f0f0"});
    });
    
    google.maps.event.addListener(tabuk_s, 'mouseover', function(){
	   //infoWindow1.open(map,marker2);
	   this.setOptions({fillOpacity: 0.7, fillColor: "#ffffff"});
	   
    });
    google.maps.event.addListener(tabuk_s, 'mouseout', function(){
	   //infoWindow1.close();
	   this.setOptions({fillOpacity: 0.0, fillColor: "#f0f0f0"});
    });
   
   
   

};



function toggleBounce() {

  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
  infoWindow1.open(map,marker);
};






//The following code generate a  
//GPolygon object
//Named as dynRegionPolygon  
var returnGeom = '41.98636,23.94912|41.97416,23.86166|41.97639,23.78916|42.00416,23.74972|42.06666,23.71750|42.10472,23.68027|42.18222,23.46556|42.20277,23.38027|42.21361,23.31500|42.22500,23.27278|42.35777,22.99166|42.39527,22.95361|42.46166,22.92666|42.50666,22.92139|42.64638,22.92611|42.87083,22.90972|42.91638,22.90055|42.98166,22.87527|43.01430,22.82666|42.98916,22.75750|42.98333,22.59361|43.01749,22.55166|43.10110,22.51972|43.14805,22.52027|43.24333,22.54777|43.33166,22.55222|43.45194,22.53056|43.48499,22.47666|43.46000,22.37306|43.45722,22.31027|43.50916,21.95611|43.50000,21.91306|43.47806,21.87388|43.44445,21.83750|43.42166,21.80000|43.42666,21.73500|43.43500,21.67361|43.43749,21.61166|43.43027,21.56861|43.39750,21.46277|43.38638,21.38138|43.40333,21.34139|43.47806,21.25555|43.54166,21.16833|43.66750,20.97611|43.71249,20.94556|43.81556,20.85916|43.85555,20.81500|43.89666,20.74945|44.04834,20.58472|44.06444,20.52806|44.04834,20.45945|43.98833,20.37500|43.96750,20.33583|43.92416,20.14445|43.93055,20.10056|43.99055,20.04222|44.07249,19.91111|44.12389,19.84472|44.32944,19.66139|44.47416,19.54333|44.51666,19.51250|44.61278,19.45750|44.76361,19.35861|44.81416,19.33361|44.91527,19.29277|45.00916,19.27278|45.17638,19.25611|45.26611,19.25361|45.36944,19.25472|45.79388,19.29389|46.06305,19.31195|46.30861,19.33611|46.97388,19.39250|47.24416,19.43333|47.44944,19.45833|47.60695,19.49333|47.74501,19.53113|47.80194,19.99000|47.89861,20.70166|48.00333,21.41333|48.05944,21.86056|48.24860,23.30111|48.28860,23.51611|48.30944,23.67722|48.31000,23.88416|48.28932,24.00000|48.27056,24.06805|48.23611,24.13888|48.18471,24.22194|48.13610,24.27666|48.00833,24.38888|47.86943,24.52000|47.78443,24.57889|47.66111,24.65333|47.59554,24.68722|47.52915,24.73500|47.49666,24.78249|47.47695,24.88055|47.46695,25.07638|47.48555,25.71888|47.47555,25.85166|47.47416,26.06860|47.46972,26.13222|47.46165,26.19861|47.44611,26.24444|47.38722,26.29166|47.15083,26.37916|47.08222,26.39527|47.03998,26.42666|47.01777,26.46861|46.93638,26.54138|46.85195,26.61250|46.80833,26.63277|46.65748,26.60666|46.58916,26.60777|46.53916,26.62583|46.44860,26.68250|46.38110,26.73056|46.31388,26.77416|46.27304,26.79888|46.23055,26.81972|46.16498,26.83805|46.07193,26.84361|46.02722,26.84166|45.97971,26.84361|45.93360,26.84999|45.87083,26.88556|45.79387,26.94805|45.75054,26.99304|45.71333,27.03861|45.67139,27.06777|45.57416,27.07138|45.52666,27.08527|45.31110,27.19306|45.24694,27.22833|45.20027,27.26250|45.17694,27.32611|45.16887,27.37194|45.14777,27.41527|45.08639,27.47250|44.98998,27.53256|44.95221,27.47472|44.89999,27.45250|44.85637,27.46583|44.79880,27.52015|44.75387,27.50750|44.70860,27.47833|44.66832,27.43749|44.62832,27.37388|44.61222,27.33333|44.60777,27.27083|44.62749,27.22222|44.69583,27.19805|44.73722,27.16999|44.81805,27.09861|44.83916,27.05555|44.84665,27.01250|44.82555,26.95194|44.77777,26.92777|44.73000,26.91611|44.67860,26.88750|44.63276,26.84916|44.57805,26.79195|44.53972,26.73249|44.50221,26.69638|44.43305,26.68638|44.38582,26.66750|44.38416,26.62388|44.39804,26.58056|44.39833,26.53416|44.37665,26.42666|44.37513,26.37444|44.40694,26.32361|44.47027,26.26833|44.67221,26.00610|44.69082,25.96222|44.65929,25.89556|44.72722,25.77833|44.73888,25.71555|44.73972,25.65416|44.71721,25.57249|44.67249,25.56749|44.55665,25.57833|44.34777,25.56056|44.29472,25.56333|44.19860,25.57916|44.10694,25.58833|44.06055,25.58388|44.01611,25.56666|43.97333,25.53416|43.94445,25.49554|43.91526,25.43722|43.86943,25.37944|43.71916,25.27722|43.63944,25.25195|43.54194,25.23416|43.34555,25.19388|43.29749,25.16806|43.25055,25.12750|43.15971,25.03249|43.12721,24.99472|43.08486,24.92000|43.09944,24.86972|43.12999,24.82805|43.14083,24.76805|43.09888,24.71054|43.04916,24.68305|43.00527,24.68111|42.93249,24.70416|42.88388,24.70611|42.79332,24.69111|42.71944,24.68250|42.64333,24.68694|42.55332,24.69583|42.50610,24.70222|42.44082,24.71722|42.37444,24.74111|42.29083,24.78472|42.24721,24.78805|42.20276,24.76472|42.16665,24.72499|42.09610,24.61138|42.08749,24.53569|42.04256,24.46881|42.00750,24.43180|41.98389,24.15166|41.98137,24.03833|41.98636,23.94912';

// Kingdom
var returnGeomKSA = '39.185785, 32.161855|39.029139, 32.019449|37.021228, 31.506791|38.003823, 30.509956|37.662051, 30.339070|37.505405, 30.011538|36.736418, 29.854892|36.494329, 29.527361|36.081355, 29.199829|34.942114, 29.370715|34.856671, 29.028943|34.842431, 28.886538|34.799709, 28.701411|34.785469, 28.644449|34.799709, 28.530525|34.771228, 28.487804|34.643064, 28.188753|34.571861, 28.117551|34.600342, 28.017867|34.671545, 28.060589|34.614583, 28.089070|34.700026, 28.146032|34.828190, 28.074829|34.942114, 28.103310|34.970595, 28.117551|35.056038, 28.117551|35.169962, 28.074829|35.184203, 27.989386|35.355089, 27.846981|35.497494, 27.619133|35.497494, 27.562171|35.625658, 27.377044|35.725342, 27.320082|35.825026, 27.206158|35.810785, 27.149196|35.853507, 27.049513|36.038633, 26.878627|36.095595, 26.750462|36.223760, 26.650779|36.494329, 26.152361|36.494329, 26.109639|36.565532, 26.052677|36.679456, 26.052677|36.679456, 25.938753|36.636734, 25.853310|36.750658, 25.710905|36.807620, 25.782108|37.078190, 25.468817|37.078190, 25.369133|37.177874, 25.226728|37.234836, 25.155525|37.263317, 25.027361|37.249076, 24.884956|37.206355, 24.842234|37.149393, 24.842234|37.220595, 24.728310|37.348760, 24.642867|37.377241, 24.557424|37.419962, 24.471981|37.448443, 24.429260|37.448443, 24.372298|37.519646, 24.272614|37.619329, 24.258373|37.676291, 24.301095|37.719013, 24.272614|37.946861, 24.130209|38.103507, 24.059006|38.459519, 23.802677|38.530722, 23.546348|38.673127, 23.418184|38.701608, 23.290019|38.701608, 23.218817|38.858253, 23.005209|38.929456, 22.948247|38.972177, 22.834323|38.929456, 22.834323|38.858253, 22.919766|38.858253, 22.862804|39.086101, 22.592234|39.086101, 22.449829|39.114583, 22.364386|39.029139, 22.207741|38.986418, 21.865968|39.057620, 21.723563|39.100342, 21.595399|39.157304, 21.495715|39.171545, 21.410272|39.128823, 21.267867|39.228507, 21.011538|39.342431, 20.869133|39.427874, 20.812171|39.484836, 20.812171|39.427874, 20.783690|39.499076, 20.698247|39.613000, 20.456158|39.855089, 20.271032|40.068696, 20.299513|40.282304, 20.114386|40.567114, 19.957741|40.652557, 19.786854|40.780722, 19.729892|40.780722, 19.658690|40.730880, 19.587487|40.958728, 19.445082|41.044171, 19.160272|41.215057, 19.074829|41.243538, 18.875462|41.215057, 18.733057|41.385943, 18.505209|41.414424, 18.305842|41.585310, 18.106475|41.699234, 17.907108|41.841639, 17.736222|41.898601, 17.764703|42.325817, 17.394449|42.382779, 17.081158|42.468222, 17.081158|42.525184, 17.081158|42.553665, 16.853310|42.667589, 16.824829|42.753032, 16.653943|42.753032, 16.540019|42.781513, 16.340652|42.980880, 16.426095|43.066323, 16.540019|43.094804, 16.739386|43.208728, 16.682424|43.123285, 16.938753|43.180247, 17.166601|43.237209, 17.394449|43.379614, 17.536854|43.550500, 17.479892|43.749867, 17.394449|43.949234, 17.337487|44.120120, 17.309006|44.404931, 17.451411|44.718222, 17.451411|45.344804, 17.451411|45.458728, 17.309006|46.541007, 17.223563|46.740374, 17.309006|46.939741, 16.995715|47.167589, 16.967234|47.509361, 17.081158|47.537842, 17.451411|48.164424, 18.163437|49.075817, 18.619133|50.813158, 18.761538|51.952399, 18.989386|54.999867, 20.014703|55.626450, 22.008373|55.199234, 22.606475|52.522019, 22.919766|51.525184, 24.144449|51.589266, 24.286854|51.446861, 24.315336|51.233253, 24.358057|51.318696, 24.443500|51.518064, 24.600146|51.404139, 24.628627|51.275975, 24.543184|51.304456, 24.614386|51.233253, 24.628627|51.176291, 24.585905|51.033886, 24.557424|50.891481, 24.628627|50.848760, 24.756791|50.706355, 24.756791|50.720595, 24.884956|50.620912, 25.055842|50.549709, 25.041601|50.492747, 25.426095|50.435785, 25.497298|50.336102, 25.497298|50.122494, 25.710905|50.179456, 25.725146|50.250658, 25.653943|50.236418, 25.767867|50.079772, 25.867551|50.094013, 25.924513|50.022810, 26.024196|49.994329, 26.123880|50.022810, 26.223563|50.122494, 26.138120|50.150975, 26.095399|50.193696, 26.180842|50.264899, 26.351728|50.179456, 26.437171|50.065532, 26.437171|49.965848, 26.707741|50.179456, 26.665019|49.994329, 26.835905|49.823443, 26.892867|49.666798, 26.992551|49.538633, 27.163437|49.438950, 27.163437|49.438950, 27.134956|49.125658, 27.434006|49.296545, 27.448247|49.282304, 27.519449|49.225342, 27.562171|49.068696, 27.519449|48.997494, 27.604892|48.940532, 27.619133|48.798127, 27.619133|48.798127, 27.790019|48.840848, 27.846981|48.855089, 27.775779|48.897810, 27.832741|48.883570, 27.889703|48.669962, 28.003627|48.556038, 28.274196|48.484836, 28.502044|48.427874, 28.559006|47.687367, 28.544766|47.587684, 28.658690|47.573443, 28.715652|47.630405, 28.744133|47.488000, 29.000462|46.533886, 29.128627|46.476924, 29.071665|44.739583, 29.199829|42.105089, 31.108057|41.450026, 31.364386|40.410469, 31.948247|40.410469, 31.948247|39.185785, 32.147614|39.171545, 32.147614|39.185785, 32.161855';

//'Asir
var returnGeomAsir = '41.69847,19.79686|41.76500,19.81888|41.82861,19.80527|41.86222,19.76195|41.86527,19.70111|41.82861,19.55028|41.84722,19.48861|41.87972,19.44722|41.89222,19.38111|41.84888,19.26139|41.81361,19.22834|41.74889,19.21972|41.65333,19.23333|41.58834,19.22306|41.54416,19.19777|41.43472,19.15750|41.38861,19.15445|41.38250,18.96445|41.38374,18.90972|41.40055,18.83750|41.43027,18.79666|41.47194,18.78334|41.57999,18.78777|41.62360,18.78445|41.66666,18.77750|41.72777,18.74416|41.81389,18.47027|41.79583,18.39778|41.77055,18.31389|41.91972,18.31834|41.93999,18.25750|41.91945,18.15777|41.92083,18.05500|41.96249,18.04250|42.02777,18.05444|42.09027,18.04805|42.12166,18.01056|42.14638,17.93027|42.20945,17.90639|42.27666,17.90250|42.40777,17.90139|42.44500,17.86694|42.49110,17.76334|42.58527,17.67528|42.64972,17.65666|42.68666,17.68000|42.71444,17.80389|42.73499,17.86777|42.77000,17.92611|42.81000,17.96028|42.89695,18.00638|42.94639,17.97944|42.93680,17.88597|42.96166,17.84166|43.04694,17.80611|43.08138,17.76250|43.12360,17.67722|43.16527,17.65528|43.22916,17.64472|43.34584,17.47666|43.40722,17.51388|43.51361,17.52195|43.63870,17.46959|43.66916,17.55069|43.65639,17.78583|43.67611,17.98874|43.67250,18.04972|43.64722,18.12611|43.63611,18.16833|43.63861,18.21416|43.66416,18.26111|43.75361,18.35611|43.83138,18.43333|43.90084,18.49195|43.97055,18.54389|44.02304,18.60639|44.05389,18.69000|44.10777,18.73389|44.19666,18.75056|44.26472,18.77500|44.33388,18.81416|44.36916,18.85306|44.39000,18.89389|44.40222,18.97305|44.39611,19.04055|44.35860,19.16861|44.35805,19.23111|44.39333,19.27000|44.48305,19.30666|44.51555,19.34500|44.51250,19.45111|44.51666,19.51250|44.47416,19.54333|44.32944,19.66139|44.12389,19.84472|44.07249,19.91111|43.99055,20.04222|43.93055,20.10056|43.92416,20.14445|43.96750,20.33583|43.98833,20.37500|44.04834,20.45945|44.06444,20.52806|44.04834,20.58472|43.89666,20.74945|43.85555,20.81500|43.81556,20.85916|43.71249,20.94556|43.66750,20.97611|43.59861,20.95583|43.52722,20.92361|43.48055,20.89361|43.43111,20.85445|43.38499,20.83333|43.33972,20.83556|43.29777,20.85195|43.23360,20.86889|43.18916,20.86639|43.14388,20.85361|43.09861,20.82861|43.05527,20.81750|42.96972,20.81916|42.92000,20.80194|42.87694,20.76500|42.84389,20.72750|42.79834,20.69777|42.72583,20.67388|42.67999,20.65166|42.63472,20.62583|42.56416,20.57000|42.44694,20.46722|42.38916,20.41083|42.31777,20.35777|42.25361,20.34027|42.20805,20.34861|42.16750,20.37666|42.13806,20.41972|42.10222,20.49084|42.07388,20.55416|42.03195,20.62472|41.97361,20.48000|41.97639,20.42777|42.03583,20.37388|42.03889,20.33027|42.00889,20.29055|41.84000,20.18194|41.81304,20.11084|41.81333,20.01583|41.76305,19.93389|41.73195,19.87305|41.69847,19.79686'; 

// Al Bahah
var returnGeomBahah = '42.03195,20.62472|41.97445,20.67750|41.93139,20.68361|41.86138,20.65333|41.81638,20.62361|41.77416,20.60833|41.67694,20.61527|41.60638,20.60083|41.54138,20.56916|41.47834,20.58528|41.45222,20.62639|41.42666,20.70861|41.39139,20.74834|41.35000,20.76500|41.28444,20.75638|41.24500,20.71778|41.22583,20.66958|41.23111,20.61639|41.25695,20.53583|41.25485,20.48111|41.14833,20.26583|41.11333,20.23722|41.02222,20.22055|40.95722,20.21444|40.91111,20.19639|40.81277,20.10277|40.80000,20.04527|40.84055,20.01861|40.90445,20.00527|40.94388,19.97583|40.95916,19.93278|40.95583,19.86861|40.94472,19.80916|40.96334,19.58027|41.00111,19.53806|41.06583,19.50806|41.10805,19.47945|41.15138,19.41556|41.18999,19.37695|41.24472,19.36222|41.28889,19.36639|41.33055,19.37972|41.36388,19.41666|41.37944,19.49694|41.39194,19.54500|41.42777,19.64333|41.45694,19.70639|41.48195,19.74639|41.52000,19.77944|41.63333,19.77889|41.69847,19.79686|41.73195,19.87305|41.76305,19.93389|41.81333,20.01583|41.81304,20.11084|41.84000,20.18194|42.00889,20.29055|42.03889,20.33027|42.03583,20.37388|41.97639,20.42777|41.97361,20.48000|42.03195,20.62472'; 

//Al Hudud ash Shamaliyah
var returnGeomShamaliyah = '37.98666,31.75405|37.94333,31.58889|37.88750,31.46722|37.86084,31.38166|37.86583,31.27500|37.87778,31.21416|37.96722,31.15695|38.01416,31.12195|38.05028,31.07777|38.07972,31.03388|38.10166,30.98833|38.12694,30.94806|38.16861,30.91139|38.21277,30.89277|38.25750,30.88500|38.30444,30.88194|38.35695,30.88416|38.46194,30.89027|38.75111,30.92139|38.88499,30.94750|38.96139,30.95527|39.08472,30.96250|39.19500,30.95888|39.31860,30.94361|39.52000,30.90361|39.69360,30.88361|39.80138,30.87416|39.85166,30.87416|39.90222,30.86222|39.94805,30.83666|40.04083,30.76500|40.09332,30.74666|40.14833,30.73694|40.33694,30.72416|40.66916,30.72138|40.74749,30.72611|40.87276,30.74361|40.92610,30.72583|40.97777,30.69500|41.17055,30.55944|41.21666,30.54722|41.26444,30.54306|41.31944,30.54888|41.42249,30.54416|41.47833,30.52945|41.52693,30.50416|41.58777,30.44138|41.61360,30.39500|41.63388,30.34722|41.67860,30.28055|41.72610,30.24138|41.83444,30.17250|41.90999,30.09264|41.83583,30.01861|41.70583,29.93305|41.62972,29.88972|41.47084,29.81361|41.32194,29.72583|41.11026,29.61138|40.99360,29.55416|40.89166,29.49500|40.78443,29.41694|40.74944,29.37611|40.73915,29.31027|40.73637,29.18584|40.73249,29.11611|40.71472,28.99096|40.68860,28.93833|40.59055,28.86333|40.54350,28.81601|40.69333,28.76111|40.76165,28.76083|40.95999,28.80916|41.27110,28.87138|41.36971,28.88333|41.53026,28.83944|41.60555,28.81638|41.65193,28.79944|41.72306,28.79305|41.77000,28.80361|41.83887,28.82694|41.92165,28.83750|41.96804,28.83611|42.11360,28.81084|42.31805,28.76777|42.41138,28.73389|42.45694,28.69556|42.53166,28.60833|42.60500,28.54527|42.65193,28.52583|42.70805,28.52083|42.79695,28.54083|42.84944,28.57000|42.92555,28.60249|42.97944,28.60694|43.00138,28.56305|43.00194,28.51777|43.00972,28.46750|43.04387,28.40556|43.09360,28.38138|43.16694,28.38056|43.25695,28.39194|43.30444,28.38084|43.42832,28.31777|43.47944,28.31277|43.52915,28.33083|43.57415,28.35500|43.62276,28.38695|43.67582,28.41777|43.72137,28.42305|43.76721,28.39166|43.79833,28.34999|43.91498,28.16416|43.95165,28.10166|44.00249,27.96999|44.03249,27.90333|44.06833,27.85945|44.11415,27.82111|44.16166,27.80222|44.23277,27.78916|44.33749,27.77861|44.40388,27.77500|44.47610,27.76361|44.54665,27.73638|44.59360,27.71194|44.77000,27.56916|44.79880,27.52015|44.85637,27.46583|44.89999,27.45250|44.95221,27.47472|44.98998,27.53256|44.93777,27.60944|44.94722,27.68222|44.97333,27.73972|44.99776,27.77749|45.03277,27.81749|45.16472,27.95305|45.23888,28.05305|45.48972,28.48000|45.57833,28.62334|45.60637,28.66083|45.64193,28.70166|45.70138,28.75805|45.77471,28.81805|46.12215,29.08607|44.72166,29.19833|43.81038,29.86850|43.06500,30.41666|42.92470,30.51616|42.08500,31.11166|41.44000,31.37333|40.41333,31.94833|40.07461,32.00586|39.19674,32.15495|39.00500,32.00556|37.98666,31.75405'; 

//Al Jawf
var returnGeomJawf = '38.75111,30.92139|38.74555,30.70306|38.71555,30.41361|38.66806,30.39833|38.59945,30.38834|38.26666,30.37666|38.01305,30.37500|37.94028,30.36861|37.89416,30.35805|37.86084,30.31472|37.84666,30.24777|37.84527,30.19916|37.85000,30.15305|37.85916,30.11055|37.89500,30.00389|37.91777,29.95639|37.97222,29.89638|38.02111,29.87000|38.25139,29.78777|38.39194,29.74333|38.43388,29.70722|38.51333,29.59806|38.58944,29.51027|38.63416,29.49250|38.68250,29.48444|38.72944,29.47027|38.77361,29.43472|38.79084,29.39111|38.78972,29.33819|38.77584,29.28472|38.73527,29.19514|38.72777,29.14166|38.73778,29.07222|38.76666,28.95611|38.78000,28.86833|38.78249,28.82111|38.78054,28.77611|38.76666,28.66861|38.75306,28.61666|38.72138,28.53194|38.63305,28.36500|38.61555,28.31472|38.59628,28.22771|38.62222,28.16333|38.65972,28.13556|38.71000,28.13777|38.86222,28.20500|38.91166,28.21166|38.95916,28.19916|38.99985,28.16789|39.05416,28.21444|39.10695,28.27611|39.28889,28.36695|39.50139,28.45250|39.57722,28.47916|39.62778,28.48944|39.67945,28.49306|39.72639,28.50694|39.82999,28.56666|40.08083,28.69166|40.45527,28.83306|40.54350,28.81601|40.59055,28.86333|40.68860,28.93833|40.71472,28.99096|40.73249,29.11611|40.73637,29.18584|40.73915,29.31027|40.74944,29.37611|40.78443,29.41694|40.89166,29.49500|40.99360,29.55416|41.11026,29.61138|41.32194,29.72583|41.47084,29.81361|41.62972,29.88972|41.70583,29.93305|41.83583,30.01861|41.90999,30.09264|41.83444,30.17250|41.72610,30.24138|41.67860,30.28055|41.63388,30.34722|41.61360,30.39500|41.58777,30.44138|41.52693,30.50416|41.47833,30.52945|41.42249,30.54416|41.31944,30.54888|41.26444,30.54306|41.21666,30.54722|41.17055,30.55944|40.97777,30.69500|40.92610,30.72583|40.87276,30.74361|40.74749,30.72611|40.66916,30.72138|40.33694,30.72416|40.14833,30.73694|40.09332,30.74666|40.04083,30.76500|39.94805,30.83666|39.90222,30.86222|39.85166,30.87416|39.80138,30.87416|39.69360,30.88361|39.52000,30.90361|39.31860,30.94361|39.19500,30.95888|39.08472,30.96250|38.96139,30.95527|38.88499,30.94750|38.75111,30.92139'; 

//Al Madinah
var returnGeomMadinah = '39.81611,26.65666|39.78527,26.70305|39.74222,26.73139|39.69777,26.72944|39.51111,26.69388|39.29695,26.66444|39.20389,26.66306|39.15972,26.66666|39.11610,26.68750|39.00166,26.76861|38.95805,26.79055|38.84333,26.81555|38.80639,26.84695|38.79333,26.90750|38.75610,26.93805|38.72292,26.90833|38.74056,26.85916|38.70111,26.82445|38.56666,26.88416|38.52138,26.88722|38.44749,26.84611|38.38027,26.79166|38.33555,26.77916|38.31833,26.84972|38.29361,26.90861|38.22944,26.93722|38.20361,26.97389|38.20166,27.03583|38.13611,27.05416|38.00139,27.05500|37.95638,27.07472|37.89277,27.15750|37.86444,27.20416|37.84499,27.24639|37.82972,27.28916|37.81416,27.35139|37.78194,27.39083|37.73638,27.39666|37.54472,27.30056|37.49444,27.28972|37.44777,27.29166|37.40055,27.30945|37.33333,27.35695|37.28611,27.37750|37.24083,27.38583|37.17388,27.36695|37.12639,27.33944|37.07999,27.31805|36.93861,27.26472|36.89166,27.25361|36.82416,27.24277|36.77888,27.21778|36.79834,27.16584|36.84416,27.17250|36.88888,27.18361|36.93361,27.17889|36.97500,27.14306|37.00083,27.05583|36.99833,26.94805|36.98778,26.90583|36.98056,26.86166|36.98000,26.80166|36.99139,26.75277|37.01305,26.71250|37.05333,26.67027|37.21416,26.62250|37.25889,26.59777|37.26972,26.54305|37.18999,26.41750|37.17055,26.37639|37.16556,26.32527|37.25444,26.12722|37.32277,26.11278|37.36722,26.11722|37.54834,26.02083|37.60444,25.90222|37.71166,25.82305|37.75666,25.78611|37.79027,25.74445|37.82777,25.66416|37.85416,25.56111|37.86805,25.51833|37.90111,25.48972|37.96638,25.49166|38.01583,25.47111|38.02584,25.42834|37.99110,25.24361|37.98611,25.18000|37.98666,25.07861|38.00000,24.95166|38.00139,24.86777|37.98250,24.82584|37.94277,24.79166|37.89361,24.78000|37.84611,24.78306|37.80055,24.79277|37.75583,24.79277|37.71833,24.76527|37.68444,24.71722|37.63777,24.68695|37.59277,24.67416|37.47277,24.67250|37.42889,24.66139|37.40138,24.62250|37.38342,24.53900|37.45000,24.45416|37.44236,24.37514|37.48861,24.31750|37.52736,24.27736|37.62590,24.27035|37.67486,24.29819|37.75486,24.25889|37.87861,24.17083|38.01361,24.08972|38.08083,24.06805|38.13666,24.04056|38.24583,23.95444|38.44687,23.78909|38.48444,23.69000|38.58312,23.51514|38.64444,23.45972|38.67455,23.42265|38.74222,23.42528|38.81472,23.43222|38.92805,23.44777|39.15916,23.19722|39.20777,23.16222|39.25278,23.15611|39.30138,23.16527|39.35000,23.17916|39.41556,23.18527|39.44833,23.15528|39.44972,23.09361|39.47306,23.05666|39.55944,23.07916|39.72944,23.13166|39.77611,23.14389|39.84694,23.15306|39.89111,23.15500|39.93527,23.13472|39.95444,23.07389|39.95333,23.02777|39.93610,22.96306|39.91805,22.92305|39.89527,22.88250|39.87639,22.84166|39.89527,22.79861|39.93999,22.79194|40.03111,22.75416|40.07139,22.71556|40.08445,22.65333|40.07805,22.60833|40.06027,22.54916|40.07916,22.50666|40.12472,22.49555|40.19222,22.48916|40.24055,22.49888|40.28472,22.52194|40.33166,22.56055|40.37194,22.60416|40.41916,22.63250|40.64000,22.56916|40.68444,22.59666|40.76083,22.71500|40.79277,22.75305|40.91499,22.84250|41.01666,22.90777|41.06389,22.94445|41.11138,22.98527|41.23584,23.10583|41.28361,23.13500|41.33083,23.15277|41.42388,23.17945|41.46444,23.21722|41.45277,23.25945|41.40806,23.28388|41.34222,23.31194|41.29749,23.33834|41.26819,23.38639|41.30722,23.43306|41.35222,23.46111|41.42277,23.49834|41.49638,23.53334|41.54500,23.55222|41.59750,23.56888|41.64500,23.58944|41.71500,23.62916|41.74583,23.67000|41.76583,23.72916|41.76749,23.77527|41.75444,23.83777|41.72806,23.89236|41.74583,23.94445|41.79277,23.96611|41.83972,23.97194|41.88583,23.96666|41.98636,23.94912|41.98137,24.03833|41.98389,24.15166|42.00750,24.43180|42.04256,24.46881|42.08749,24.53569|42.09610,24.61138|42.01499,24.66388|41.97776,24.70111|41.95916,24.74361|41.93999,24.80833|41.90915,24.94416|41.88637,24.98694|41.84555,25.01694|41.73583,25.03916|41.69166,25.05361|41.65388,25.08583|41.63637,25.14694|41.64083,25.25306|41.65471,25.36027|41.65777,25.40555|41.64971,25.45777|41.61054,25.48833|41.40971,25.53638|41.30999,25.56166|41.06722,25.59722|40.99666,25.59944|40.87332,25.59333|40.80276,25.57611|40.73944,25.52166|40.68777,25.45666|40.64388,25.42444|40.59610,25.40722|40.55165,25.40083|40.41194,25.40500|40.36222,25.39694|40.20638,25.34722|40.13555,25.32056|40.09027,25.31138|40.04527,25.31222|40.00000,25.33082|39.94888,25.39083|39.95666,25.57166|39.95888,25.67945|39.95000,25.74916|39.94083,25.79195|39.92972,25.83416|39.89972,25.91638|39.95389,26.22277|39.96000,26.26694|39.95722,26.33166|39.90027,26.35139|39.85334,26.33472|39.80833,26.34305|39.77416,26.38222|39.82111,26.48361|39.84277,26.54666|39.84111,26.59361|39.81611,26.65666'; 

//Al Qasim
var returnGeomQasim = '41.40971,25.53638|41.61054,25.48833|41.64971,25.45777|41.65777,25.40555|41.65471,25.36027|41.64083,25.25306|41.63637,25.14694|41.65388,25.08583|41.69166,25.05361|41.73583,25.03916|41.84555,25.01694|41.88637,24.98694|41.90915,24.94416|41.93999,24.80833|41.95916,24.74361|41.97776,24.70111|42.01499,24.66388|42.09610,24.61138|42.16665,24.72499|42.20276,24.76472|42.24721,24.78805|42.29083,24.78472|42.37444,24.74111|42.44082,24.71722|42.50610,24.70222|42.55332,24.69583|42.64333,24.68694|42.71944,24.68250|42.79332,24.69111|42.88388,24.70611|42.93249,24.70416|43.00527,24.68111|43.04916,24.68305|43.09888,24.71054|43.14083,24.76805|43.12999,24.82805|43.09944,24.86972|43.08486,24.92000|43.12721,24.99472|43.15971,25.03249|43.25055,25.12750|43.29749,25.16806|43.34555,25.19388|43.54194,25.23416|43.63944,25.25195|43.71916,25.27722|43.86943,25.37944|43.91526,25.43722|43.94445,25.49554|43.97333,25.53416|44.01611,25.56666|44.06055,25.58388|44.10694,25.58833|44.19860,25.57916|44.29472,25.56333|44.34777,25.56056|44.55665,25.57833|44.67249,25.56749|44.71721,25.57249|44.73972,25.65416|44.73888,25.71555|44.72722,25.77833|44.65929,25.89556|44.69082,25.96222|44.67221,26.00610|44.47027,26.26833|44.40694,26.32361|44.37513,26.37444|44.37665,26.42666|44.39833,26.53416|44.39804,26.58056|44.38416,26.62388|44.38582,26.66750|44.43305,26.68638|44.50221,26.69638|44.53972,26.73249|44.57805,26.79195|44.63276,26.84916|44.67860,26.88750|44.73000,26.91611|44.77777,26.92777|44.82555,26.95194|44.84665,27.01250|44.83916,27.05555|44.81805,27.09861|44.73722,27.16999|44.69583,27.19805|44.62749,27.22222|44.56666,27.16916|44.50555,27.08833|44.45776,27.06472|44.23860,27.09083|44.17472,27.13110|44.09027,27.19138|44.04749,27.22666|44.00750,27.27083|43.93777,27.32083|43.89277,27.33027|43.84637,27.32306|43.77249,27.29555|43.52583,27.17694|43.35166,27.10277|43.31110,27.07500|43.27249,27.03111|43.19249,26.88055|43.14694,26.85388|42.94693,26.78527|42.86415,26.74416|42.80360,26.70694|42.51916,26.50333|42.43805,26.43584|42.38138,26.37695|42.35611,26.26472|42.19111,26.24694|42.15694,26.18416|42.14055,26.14166|42.13527,26.09152|42.15193,26.02000|42.12360,25.93277|42.05055,25.94945|41.98249,25.97638|41.93610,25.97416|41.89971,25.93444|41.88665,25.89277|41.89804,25.84777|41.95999,25.74472|41.93500,25.70611|41.81360,25.69861|41.76250,25.68584|41.69055,25.65333|41.58833,25.59194|41.54165,25.58333|41.49443,25.58194|41.44471,25.57249|41.40971,25.53638'; 

//Al Qurayyat
var returnGeomQurayyat = '34.84254,28.88452|34.92528,28.88138|34.97277,28.89695|35.09638,28.86944|35.25306,28.86250|35.32000,28.92000|35.36416,28.93333|35.56666,28.96666|35.80166,28.98889|35.85222,28.98555|35.92777,28.97250|36.05138,28.94334|36.12222,28.90472|36.16888,28.86444|36.20583,28.82333|36.30527,28.69750|36.37611,28.61472|36.42055,28.57333|36.47055,28.55695|36.52305,28.56527|36.61833,28.60055|36.82583,28.64194|36.90055,28.64972|36.94555,28.64611|37.02499,28.63000|37.15916,28.58388|37.20722,28.57750|37.35055,28.56695|37.40722,28.56556|37.45277,28.58027|37.47916,28.62111|37.51749,28.71445|37.54194,28.75611|37.71583,28.87556|37.76138,28.85139|37.77472,28.80944|37.76277,28.66611|37.76194,28.60083|37.77055,28.51305|37.77972,28.46583|37.79722,28.42472|37.82416,28.38166|37.86583,28.34389|37.93250,28.30055|37.98000,28.28111|38.07611,28.25277|38.15111,28.24250|38.37028,28.22250|38.41750,28.25445|38.46305,28.26861|38.53027,28.22416|38.59628,28.22771|38.61555,28.31472|38.63305,28.36500|38.72138,28.53194|38.75306,28.61666|38.76666,28.66861|38.78054,28.77611|38.78249,28.82111|38.78000,28.86833|38.76666,28.95611|38.73778,29.07222|38.72777,29.14166|38.73527,29.19514|38.77584,29.28472|38.78972,29.33819|38.79084,29.39111|38.77361,29.43472|38.72944,29.47027|38.68250,29.48444|38.63416,29.49250|38.58944,29.51027|38.51333,29.59806|38.43388,29.70722|38.39194,29.74333|38.25139,29.78777|38.02111,29.87000|37.97222,29.89638|37.91777,29.95639|37.89500,30.00389|37.85916,30.11055|37.85000,30.15305|37.84527,30.19916|37.84666,30.24777|37.86084,30.31472|37.89416,30.35805|37.94028,30.36861|38.01305,30.37500|38.26666,30.37666|38.59945,30.38834|38.66806,30.39833|38.71555,30.41361|38.74555,30.70306|38.75111,30.92139|38.46194,30.89027|38.35695,30.88416|38.30444,30.88194|38.25750,30.88500|38.21277,30.89277|38.16861,30.91139|38.12694,30.94806|38.10166,30.98833|38.07972,31.03388|38.05028,31.07777|38.01416,31.12195|37.96722,31.15695|37.87778,31.21416|37.86583,31.27500|37.86084,31.38166|37.88750,31.46722|37.94333,31.58889|37.98666,31.75405|37.96388,31.74834|37.00527,31.50555|37.29499,31.21723|37.49000,31.02305|38.00139,30.50416|37.66750,30.33639|37.50278,30.00222|36.74361,29.86472|36.50055,29.50277|36.07000,29.18889|35.54111,29.27250|34.96139,29.36084|34.90944,29.22888|34.88333,29.13583|34.84254,28.88452'; 

//Ar Riyad
var returnGeomRiyad = '41.98636,23.94912|41.97416,23.86166|41.97639,23.78916|42.00416,23.74972|42.06666,23.71750|42.10472,23.68027|42.18222,23.46556|42.20277,23.38027|42.21361,23.31500|42.22500,23.27278|42.35777,22.99166|42.39527,22.95361|42.46166,22.92666|42.50666,22.92139|42.64638,22.92611|42.87083,22.90972|42.91638,22.90055|42.98166,22.87527|43.01430,22.82666|42.98916,22.75750|42.98333,22.59361|43.01749,22.55166|43.10110,22.51972|43.14805,22.52027|43.24333,22.54777|43.33166,22.55222|43.45194,22.53056|43.48499,22.47666|43.46000,22.37306|43.45722,22.31027|43.50916,21.95611|43.50000,21.91306|43.47806,21.87388|43.44445,21.83750|43.42166,21.80000|43.42666,21.73500|43.43500,21.67361|43.43749,21.61166|43.43027,21.56861|43.39750,21.46277|43.38638,21.38138|43.40333,21.34139|43.47806,21.25555|43.54166,21.16833|43.66750,20.97611|43.71249,20.94556|43.81556,20.85916|43.85555,20.81500|43.89666,20.74945|44.04834,20.58472|44.06444,20.52806|44.04834,20.45945|43.98833,20.37500|43.96750,20.33583|43.92416,20.14445|43.93055,20.10056|43.99055,20.04222|44.07249,19.91111|44.12389,19.84472|44.32944,19.66139|44.47416,19.54333|44.51666,19.51250|44.61278,19.45750|44.76361,19.35861|44.81416,19.33361|44.91527,19.29277|45.00916,19.27278|45.17638,19.25611|45.26611,19.25361|45.36944,19.25472|45.79388,19.29389|46.06305,19.31195|46.30861,19.33611|46.97388,19.39250|47.24416,19.43333|47.44944,19.45833|47.60695,19.49333|47.74501,19.53113|47.80194,19.99000|47.89861,20.70166|48.00333,21.41333|48.05944,21.86056|48.24860,23.30111|48.28860,23.51611|48.30944,23.67722|48.31000,23.88416|48.28932,24.00000|48.27056,24.06805|48.23611,24.13888|48.18471,24.22194|48.13610,24.27666|48.00833,24.38888|47.86943,24.52000|47.78443,24.57889|47.66111,24.65333|47.59554,24.68722|47.52915,24.73500|47.49666,24.78249|47.47695,24.88055|47.46695,25.07638|47.48555,25.71888|47.47555,25.85166|47.47416,26.06860|47.46972,26.13222|47.46165,26.19861|47.44611,26.24444|47.38722,26.29166|47.15083,26.37916|47.08222,26.39527|47.03998,26.42666|47.01777,26.46861|46.93638,26.54138|46.85195,26.61250|46.80833,26.63277|46.65748,26.60666|46.58916,26.60777|46.53916,26.62583|46.44860,26.68250|46.38110,26.73056|46.31388,26.77416|46.27304,26.79888|46.23055,26.81972|46.16498,26.83805|46.07193,26.84361|46.02722,26.84166|45.97971,26.84361|45.93360,26.84999|45.87083,26.88556|45.79387,26.94805|45.75054,26.99304|45.71333,27.03861|45.67139,27.06777|45.57416,27.07138|45.52666,27.08527|45.31110,27.19306|45.24694,27.22833|45.20027,27.26250|45.17694,27.32611|45.16887,27.37194|45.14777,27.41527|45.08639,27.47250|44.98998,27.53256|44.95221,27.47472|44.89999,27.45250|44.85637,27.46583|44.79880,27.52015|44.75387,27.50750|44.70860,27.47833|44.66832,27.43749|44.62832,27.37388|44.61222,27.33333|44.60777,27.27083|44.62749,27.22222|44.69583,27.19805|44.73722,27.16999|44.81805,27.09861|44.83916,27.05555|44.84665,27.01250|44.82555,26.95194|44.77777,26.92777|44.73000,26.91611|44.67860,26.88750|44.63276,26.84916|44.57805,26.79195|44.53972,26.73249|44.50221,26.69638|44.43305,26.68638|44.38582,26.66750|44.38416,26.62388|44.39804,26.58056|44.39833,26.53416|44.37665,26.42666|44.37513,26.37444|44.40694,26.32361|44.47027,26.26833|44.67221,26.00610|44.69082,25.96222|44.65929,25.89556|44.72722,25.77833|44.73888,25.71555|44.73972,25.65416|44.71721,25.57249|44.67249,25.56749|44.55665,25.57833|44.34777,25.56056|44.29472,25.56333|44.19860,25.57916|44.10694,25.58833|44.06055,25.58388|44.01611,25.56666|43.97333,25.53416|43.94445,25.49554|43.91526,25.43722|43.86943,25.37944|43.71916,25.27722|43.63944,25.25195|43.54194,25.23416|43.34555,25.19388|43.29749,25.16806|43.25055,25.12750|43.15971,25.03249|43.12721,24.99472|43.08486,24.92000|43.09944,24.86972|43.12999,24.82805|43.14083,24.76805|43.09888,24.71054|43.04916,24.68305|43.00527,24.68111|42.93249,24.70416|42.88388,24.70611|42.79332,24.69111|42.71944,24.68250|42.64333,24.68694|42.55332,24.69583|42.50610,24.70222|42.44082,24.71722|42.37444,24.74111|42.29083,24.78472|42.24721,24.78805|42.20276,24.76472|42.16665,24.72499|42.09610,24.61138|42.08749,24.53569|42.04256,24.46881|42.00750,24.43180|41.98389,24.15166|41.98137,24.03833|41.98636,23.94912'; 

//Ash Sharqiyah
var returnGeomSharqiyah = '46.12215,29.08607|45.77471,28.81805|45.70138,28.75805|45.64193,28.70166|45.60637,28.66083|45.57833,28.62334|45.48972,28.48000|45.23888,28.05305|45.16472,27.95305|45.03277,27.81749|44.99776,27.77749|44.97333,27.73972|44.94722,27.68222|44.93777,27.60944|44.98998,27.53256|45.08639,27.47250|45.14777,27.41527|45.16887,27.37194|45.17694,27.32611|45.20027,27.26250|45.24694,27.22833|45.31110,27.19306|45.52666,27.08527|45.57416,27.07138|45.67139,27.06777|45.71333,27.03861|45.75054,26.99304|45.79387,26.94805|45.87083,26.88556|45.93360,26.84999|45.97971,26.84361|46.02722,26.84166|46.07193,26.84361|46.16498,26.83805|46.23055,26.81972|46.27304,26.79888|46.31388,26.77416|46.38110,26.73056|46.44860,26.68250|46.53916,26.62583|46.58916,26.60777|46.65748,26.60666|46.80833,26.63277|46.85195,26.61250|46.93638,26.54138|47.01777,26.46861|47.03998,26.42666|47.08222,26.39527|47.15083,26.37916|47.38722,26.29166|47.44611,26.24444|47.46165,26.19861|47.46972,26.13222|47.47416,26.06860|47.47555,25.85166|47.48555,25.71888|47.46695,25.07638|47.47695,24.88055|47.49666,24.78249|47.52915,24.73500|47.59554,24.68722|47.66111,24.65333|47.78443,24.57889|47.86943,24.52000|48.00833,24.38888|48.13610,24.27666|48.18471,24.22194|48.23611,24.13888|48.27056,24.06805|48.28932,24.00000|48.31000,23.88416|48.30944,23.67722|48.28860,23.51611|48.24860,23.30111|48.05944,21.86056|48.00333,21.41333|47.89861,20.70166|47.80194,19.99000|47.74501,19.53113|47.70333,19.25333|47.51166,17.77444|47.42965,17.09489|47.60000,17.45000|47.83608,17.74004|48.18334,18.16666|49.11666,18.61666|50.78334,18.78889|51.22199,18.86500|51.99929,18.99934|55.00000,20.00000|55.42220,21.26751|55.66611,21.99972|55.19916,22.69972|55.14166,22.63333|52.58333,22.93889|51.58333,24.11666|51.58423,24.26046|51.52958,24.26055|51.47333,24.30986|51.40722,24.31972|51.35262,24.29214|51.30792,24.29124|51.27903,24.33736|51.33194,24.43861|51.40806,24.49834|51.48722,24.58333|51.43875,24.62014|51.39222,24.59555|51.34583,24.54125|51.29893,24.51967|51.30610,24.59334|51.21516,24.62089|51.17889,24.58639|51.11136,24.55604|50.97305,24.57695|50.86591,24.69000|50.83095,24.74996|50.77541,24.72083|50.74006,24.79493|50.72639,24.87708|50.64388,24.99416|50.60645,25.04264|50.56000,25.04951|50.53416,25.20416|50.52277,25.28826|50.45770,25.44409|50.34680,25.47542|50.30555,25.51694|50.16311,25.72001|50.25596,25.66506|50.17949,25.76589|50.13444,25.82000|50.11409,25.86868|50.10764,25.91514|49.99389,26.02000|49.97895,26.13306|50.06312,26.17806|50.15583,26.10111|50.21527,26.20764|50.21945,26.30028|50.21180,26.37493|50.17312,26.42159|50.05041,26.46514|50.00235,26.56153|49.98305,26.69945|49.99638,26.74250|50.15874,26.64264|50.13277,26.68750|49.95199,26.85001|49.86652,26.85944|49.78611,26.90000|49.70333,26.95111|49.66693,26.97764|49.62249,27.05666|49.54221,27.17111|49.49274,27.16218|49.44448,27.13216|49.40056,27.15777|49.24749,27.34054|49.16694,27.45861|49.22909,27.45083|49.30874,27.44485|49.30125,27.48903|49.23652,27.54430|49.17715,27.55111|49.05138,27.54555|49.01666,27.58333|48.95874,27.62416|48.91132,27.59986|48.83887,27.61972|48.78860,27.74444|48.79860,27.80736|48.85569,27.80222|48.87430,27.76111|48.87750,27.83361|48.65041,28.03819|48.60333,28.12111|48.51875,28.33472|48.51860,28.41666|48.50165,28.49514|48.41659,28.54527|47.68888,28.53888|47.60276,28.63499|47.57666,28.73306|47.56471,28.79666|47.50694,28.92306|47.46339,28.98446|46.54695,29.10420|46.42667,29.06166|46.12215,29.08607'; 

//Ha'il
var returnGeomHail = '38.99985,28.16789|39.03277,28.13389|39.14889,28.10889|39.24249,28.09916|39.33806,28.08111|39.40805,28.06222|39.45305,28.04111|39.55333,27.95166|39.65834,27.87500|39.72610,27.84945|39.79027,27.79527|39.81305,27.75306|39.84111,27.64027|39.91166,27.38111|39.92833,27.34083|39.99208,27.28991|40.11610,27.23638|40.15943,27.20777|40.17387,27.16666|40.14360,27.10416|40.07749,27.04888|40.03249,27.01833|39.99403,26.98480|39.95527,26.94194|39.93027,26.90056|39.90416,26.80958|39.87389,26.71889|39.81611,26.65666|39.84111,26.59361|39.84277,26.54666|39.82111,26.48361|39.77416,26.38222|39.80833,26.34305|39.85334,26.33472|39.90027,26.35139|39.95722,26.33166|39.96000,26.26694|39.95389,26.22277|39.89972,25.91638|39.92972,25.83416|39.94083,25.79195|39.95000,25.74916|39.95888,25.67945|39.95666,25.57166|39.94888,25.39083|40.00000,25.33082|40.04527,25.31222|40.09027,25.31138|40.13555,25.32056|40.20638,25.34722|40.36222,25.39694|40.41194,25.40500|40.55165,25.40083|40.59610,25.40722|40.64388,25.42444|40.68777,25.45666|40.73944,25.52166|40.80276,25.57611|40.87332,25.59333|40.99666,25.59944|41.06722,25.59722|41.30999,25.56166|41.40971,25.53638|41.44471,25.57249|41.49443,25.58194|41.54165,25.58333|41.58833,25.59194|41.69055,25.65333|41.76250,25.68584|41.81360,25.69861|41.93500,25.70611|41.95999,25.74472|41.89804,25.84777|41.88665,25.89277|41.89971,25.93444|41.93610,25.97416|41.98249,25.97638|42.05055,25.94945|42.12360,25.93277|42.15193,26.02000|42.13527,26.09152|42.14055,26.14166|42.15694,26.18416|42.19111,26.24694|42.35611,26.26472|42.38138,26.37695|42.43805,26.43584|42.51916,26.50333|42.80360,26.70694|42.86415,26.74416|42.94693,26.78527|43.14694,26.85388|43.19249,26.88055|43.27249,27.03111|43.31110,27.07500|43.35166,27.10277|43.52583,27.17694|43.77249,27.29555|43.84637,27.32306|43.89277,27.33027|43.93777,27.32083|44.00750,27.27083|44.04749,27.22666|44.09027,27.19138|44.17472,27.13110|44.23860,27.09083|44.45776,27.06472|44.50555,27.08833|44.56666,27.16916|44.62749,27.22222|44.60777,27.27083|44.61222,27.33333|44.62832,27.37388|44.66832,27.43749|44.70860,27.47833|44.75387,27.50750|44.79880,27.52015|44.77000,27.56916|44.59360,27.71194|44.54665,27.73638|44.47610,27.76361|44.40388,27.77500|44.33749,27.77861|44.23277,27.78916|44.16166,27.80222|44.11415,27.82111|44.06833,27.85945|44.03249,27.90333|44.00249,27.96999|43.95165,28.10166|43.91498,28.16416|43.79833,28.34999|43.76721,28.39166|43.72137,28.42305|43.67582,28.41777|43.62276,28.38695|43.57415,28.35500|43.52915,28.33083|43.47944,28.31277|43.42832,28.31777|43.30444,28.38084|43.25695,28.39194|43.16694,28.38056|43.09360,28.38138|43.04387,28.40556|43.00972,28.46750|43.00194,28.51777|43.00138,28.56305|42.97944,28.60694|42.92555,28.60249|42.84944,28.57000|42.79695,28.54083|42.70805,28.52083|42.65193,28.52583|42.60500,28.54527|42.53166,28.60833|42.45694,28.69556|42.41138,28.73389|42.31805,28.76777|42.11360,28.81084|41.96804,28.83611|41.92165,28.83750|41.83887,28.82694|41.77000,28.80361|41.72306,28.79305|41.65193,28.79944|41.60555,28.81638|41.53026,28.83944|41.36971,28.88333|41.27110,28.87138|40.95999,28.80916|40.76165,28.76083|40.69333,28.76111|40.54350,28.81601|40.45527,28.83306|40.08083,28.69166|39.82999,28.56666|39.72639,28.50694|39.67945,28.49306|39.62778,28.48944|39.57722,28.47916|39.50139,28.45250|39.28889,28.36695|39.10695,28.27611|39.05416,28.21444|38.99985,28.16789'; 

//Jizan
var returnGeomJizan = '41.59715,18.12136|41.67889,17.94945|41.79111,17.83194|41.87652,17.81250|42.09389,17.64972|42.19445,17.54222|42.30708,17.44764|42.32111,17.39805|42.32583,17.25333|42.33639,17.18416|42.35334,17.08083|42.37055,17.04000|42.36527,17.11056|42.40834,17.12139|42.54791,16.99826|42.54777,16.93861|42.54035,16.87451|42.62527,16.82527|42.67222,16.78195|42.73194,16.62250|42.72069,16.56750|42.73451,16.52500|42.78934,16.46083|42.78968,16.37750|42.91861,16.42306|43.05985,16.54236|43.10243,16.67777|43.20611,16.67222|43.19777,16.71583|43.16097,16.83555|43.12354,16.92514|43.15166,17.12222|43.19194,17.34222|43.25881,17.41465|43.34584,17.47666|43.22916,17.64472|43.16527,17.65528|43.12360,17.67722|43.08138,17.76250|43.04694,17.80611|42.96166,17.84166|42.93680,17.88597|42.94639,17.97944|42.89695,18.00638|42.81000,17.96028|42.77000,17.92611|42.73499,17.86777|42.71444,17.80389|42.68666,17.68000|42.64972,17.65666|42.58527,17.67528|42.49110,17.76334|42.44500,17.86694|42.40777,17.90139|42.27666,17.90250|42.20945,17.90639|42.14638,17.93027|42.12166,18.01056|42.09027,18.04805|42.02777,18.05444|41.96249,18.04250|41.92083,18.05500|41.91945,18.15777|41.93999,18.25750|41.91972,18.31834|41.77055,18.31389|41.74194,18.25666|41.63888,18.19972|41.59715,18.12136'; 

//Makkah
var returnGeomMakkah = '38.67455,23.42265|38.69222,23.29138|38.70812,23.24284|38.75861,23.17334|38.89486,22.96083|38.96056,22.86555|38.91305,22.84972|38.85104,22.92506|38.89638,22.84611|38.96861,22.74806|39.06277,22.58333|39.10527,22.37722|39.03083,22.21472|39.01722,22.12222|38.99305,21.83694|39.03361,21.79222|39.06666,21.72027|39.09361,21.61945|39.16333,21.50083|39.17222,21.43722|39.15867,21.37466|39.10583,21.28000|39.17485,21.10403|39.27111,20.94944|39.35014,20.86736|39.41493,20.84701|39.41916,20.79806|39.43749,20.74750|39.48638,20.71639|39.54445,20.61444|39.56833,20.56805|39.66069,20.43791|39.80305,20.33388|39.88000,20.28777|40.09695,20.27194|40.16027,20.20027|40.28014,20.10805|40.44333,20.00861|40.51138,19.97416|40.68111,19.79527|40.75694,19.76416|40.78708,19.71736|40.80277,19.65916|40.76666,19.60222|40.84368,19.53382|40.95611,19.45222|41.04361,19.18083|41.08735,19.10819|41.17535,19.06500|41.13458,18.94521|41.20556,18.86472|41.24478,18.82645|41.21334,18.75638|41.20583,18.70027|41.26222,18.61305|41.35625,18.56542|41.40972,18.50361|41.43847,18.46222|41.44388,18.36972|41.45806,18.32597|41.53666,18.19166|41.59715,18.12136|41.63888,18.19972|41.74194,18.25666|41.77055,18.31389|41.79583,18.39778|41.81389,18.47027|41.72777,18.74416|41.66666,18.77750|41.62360,18.78445|41.57999,18.78777|41.47194,18.78334|41.43027,18.79666|41.40055,18.83750|41.38374,18.90972|41.38250,18.96445|41.38861,19.15445|41.43472,19.15750|41.54416,19.19777|41.58834,19.22306|41.65333,19.23333|41.74889,19.21972|41.81361,19.22834|41.84888,19.26139|41.89222,19.38111|41.87972,19.44722|41.84722,19.48861|41.82861,19.55028|41.86527,19.70111|41.86222,19.76195|41.82861,19.80527|41.76500,19.81888|41.69847,19.79686|41.63333,19.77889|41.52000,19.77944|41.48195,19.74639|41.45694,19.70639|41.42777,19.64333|41.39194,19.54500|41.37944,19.49694|41.36388,19.41666|41.33055,19.37972|41.28889,19.36639|41.24472,19.36222|41.18999,19.37695|41.15138,19.41556|41.10805,19.47945|41.06583,19.50806|41.00111,19.53806|40.96334,19.58027|40.94472,19.80916|40.95583,19.86861|40.95916,19.93278|40.94388,19.97583|40.90445,20.00527|40.84055,20.01861|40.80000,20.04527|40.81277,20.10277|40.91111,20.19639|40.95722,20.21444|41.02222,20.22055|41.11333,20.23722|41.14833,20.26583|41.25485,20.48111|41.25695,20.53583|41.23111,20.61639|41.22583,20.66958|41.24500,20.71778|41.28444,20.75638|41.35000,20.76500|41.39139,20.74834|41.42666,20.70861|41.45222,20.62639|41.47834,20.58528|41.54138,20.56916|41.60638,20.60083|41.67694,20.61527|41.77416,20.60833|41.81638,20.62361|41.86138,20.65333|41.93139,20.68361|41.97445,20.67750|42.03195,20.62472|42.07388,20.55416|42.10222,20.49084|42.13806,20.41972|42.16750,20.37666|42.20805,20.34861|42.25361,20.34027|42.31777,20.35777|42.38916,20.41083|42.44694,20.46722|42.56416,20.57000|42.63472,20.62583|42.67999,20.65166|42.72583,20.67388|42.79834,20.69777|42.84389,20.72750|42.87694,20.76500|42.92000,20.80194|42.96972,20.81916|43.05527,20.81750|43.09861,20.82861|43.14388,20.85361|43.18916,20.86639|43.23360,20.86889|43.29777,20.85195|43.33972,20.83556|43.38499,20.83333|43.43111,20.85445|43.48055,20.89361|43.52722,20.92361|43.59861,20.95583|43.66750,20.97611|43.54166,21.16833|43.47806,21.25555|43.40333,21.34139|43.38638,21.38138|43.39750,21.46277|43.43027,21.56861|43.43749,21.61166|43.43500,21.67361|43.42666,21.73500|43.42166,21.80000|43.44445,21.83750|43.47806,21.87388|43.50000,21.91306|43.50916,21.95611|43.45722,22.31027|43.46000,22.37306|43.48499,22.47666|43.45194,22.53056|43.33166,22.55222|43.24333,22.54777|43.14805,22.52027|43.10110,22.51972|43.01749,22.55166|42.98333,22.59361|42.98916,22.75750|43.01430,22.82666|42.98166,22.87527|42.91638,22.90055|42.87083,22.90972|42.64638,22.92611|42.50666,22.92139|42.46166,22.92666|42.39527,22.95361|42.35777,22.99166|42.22500,23.27278|42.21361,23.31500|42.20277,23.38027|42.18222,23.46556|42.10472,23.68027|42.06666,23.71750|42.00416,23.74972|41.97639,23.78916|41.97416,23.86166|41.98636,23.94912|41.88583,23.96666|41.83972,23.97194|41.79277,23.96611|41.74583,23.94445|41.72806,23.89236|41.75444,23.83777|41.76749,23.77527|41.76583,23.72916|41.74583,23.67000|41.71500,23.62916|41.64500,23.58944|41.59750,23.56888|41.54500,23.55222|41.49638,23.53334|41.42277,23.49834|41.35222,23.46111|41.30722,23.43306|41.26819,23.38639|41.29749,23.33834|41.34222,23.31194|41.40806,23.28388|41.45277,23.25945|41.46444,23.21722|41.42388,23.17945|41.33083,23.15277|41.28361,23.13500|41.23584,23.10583|41.11138,22.98527|41.06389,22.94445|41.01666,22.90777|40.91499,22.84250|40.79277,22.75305|40.76083,22.71500|40.68444,22.59666|40.64000,22.56916|40.41916,22.63250|40.37194,22.60416|40.33166,22.56055|40.28472,22.52194|40.24055,22.49888|40.19222,22.48916|40.12472,22.49555|40.07916,22.50666|40.06027,22.54916|40.07805,22.60833|40.08445,22.65333|40.07139,22.71556|40.03111,22.75416|39.93999,22.79194|39.89527,22.79861|39.87639,22.84166|39.89527,22.88250|39.91805,22.92305|39.93610,22.96306|39.95333,23.02777|39.95444,23.07389|39.93527,23.13472|39.89111,23.15500|39.84694,23.15306|39.77611,23.14389|39.72944,23.13166|39.55944,23.07916|39.47306,23.05666|39.44972,23.09361|39.44833,23.15528|39.41556,23.18527|39.35000,23.17916|39.30138,23.16527|39.25278,23.15611|39.20777,23.16222|39.15916,23.19722|38.92805,23.44777|38.81472,23.43222|38.74222,23.42528|38.67455,23.42265'; 

//Najran
var returnGeomNajran = '44.51666,19.51250|44.51250,19.45111|44.51555,19.34500|44.48305,19.30666|44.39333,19.27000|44.35805,19.23111|44.35860,19.16861|44.39611,19.04055|44.40222,18.97305|44.39000,18.89389|44.36916,18.85306|44.33388,18.81416|44.26472,18.77500|44.19666,18.75056|44.10777,18.73389|44.05389,18.69000|44.02304,18.60639|43.97055,18.54389|43.90084,18.49195|43.83138,18.43333|43.75361,18.35611|43.66416,18.26111|43.63861,18.21416|43.63611,18.16833|43.64722,18.12611|43.67250,18.04972|43.67611,17.98874|43.65639,17.78583|43.66916,17.55069|43.63870,17.46959|43.67153,17.41972|43.76096,17.35195|43.93916,17.30645|44.08972,17.34666|44.18527,17.40916|44.36611,17.43334|44.46666,17.43334|44.56666,17.40556|44.65000,17.43334|45.21666,17.43334|45.40000,17.33334|46.10000,17.25000|46.36666,17.23334|46.75000,17.28334|47.00000,16.95000|47.18334,16.95000|47.42965,17.09489|47.51166,17.77444|47.70333,19.25333|47.74501,19.53113|47.60695,19.49333|47.44944,19.45833|47.24416,19.43333|46.97388,19.39250|46.30861,19.33611|46.06305,19.31195|45.79388,19.29389|45.36944,19.25472|45.26611,19.25361|45.17638,19.25611|45.00916,19.27278|44.91527,19.29277|44.81416,19.33361|44.76361,19.35861|44.61278,19.45750|44.51666,19.51250'; 
//Tabuk
var returnGeomTabuk = '34.84254,28.88452|34.79834,28.62722|34.80680,28.53909|34.77277,28.47819|34.69250,28.28722|34.63215,28.17472|34.57214,28.09590|34.64416,28.03819|34.64889,28.09361|34.70624,28.13827|34.84653,28.07139|34.93388,28.08333|34.99708,28.11084|35.05611,28.11278|35.16055,28.05666|35.18777,27.99695|35.23250,27.96416|35.33291,27.85874|35.50750,27.60250|35.50805,27.54277|35.53249,27.49611|35.56583,27.44305|35.63708,27.35965|35.72500,27.30639|35.79972,27.21000|35.80027,27.15806|35.81916,27.10014|35.90611,26.99944|35.99195,26.92666|36.03180,26.89653|36.05194,26.84083|36.09708,26.74958|36.14430,26.71736|36.21180,26.64625|36.30805,26.49569|36.48166,26.18445|36.51250,26.10764|36.54534,26.07840|36.58666,26.06111|36.66556,26.04889|36.70014,26.01584|36.70527,25.95430|36.65514,25.86597|36.67388,25.82584|36.69694,25.78639|36.72416,25.74986|36.82805,25.74403|36.93250,25.64500|37.07861,25.39166|37.09583,25.33653|37.12875,25.28847|37.18416,25.22861|37.23555,25.18250|37.25805,25.13277|37.27861,24.97583|37.25722,24.87027|37.21972,24.84097|37.15451,24.84014|37.26500,24.70000|37.32750,24.63750|37.38342,24.53900|37.40138,24.62250|37.42889,24.66139|37.47277,24.67250|37.59277,24.67416|37.63777,24.68695|37.68444,24.71722|37.71833,24.76527|37.75583,24.79277|37.80055,24.79277|37.84611,24.78306|37.89361,24.78000|37.94277,24.79166|37.98250,24.82584|38.00139,24.86777|38.00000,24.95166|37.98666,25.07861|37.98611,25.18000|37.99110,25.24361|38.02584,25.42834|38.01583,25.47111|37.96638,25.49166|37.90111,25.48972|37.86805,25.51833|37.85416,25.56111|37.82777,25.66416|37.79027,25.74445|37.75666,25.78611|37.71166,25.82305|37.60444,25.90222|37.54834,26.02083|37.36722,26.11722|37.32277,26.11278|37.25444,26.12722|37.16556,26.32527|37.17055,26.37639|37.18999,26.41750|37.26972,26.54305|37.25889,26.59777|37.21416,26.62250|37.05333,26.67027|37.01305,26.71250|36.99139,26.75277|36.98000,26.80166|36.98056,26.86166|36.98778,26.90583|36.99833,26.94805|37.00083,27.05583|36.97500,27.14306|36.93361,27.17889|36.88888,27.18361|36.84416,27.17250|36.79834,27.16584|36.77888,27.21778|36.82416,27.24277|36.89166,27.25361|36.93861,27.26472|37.07999,27.31805|37.12639,27.33944|37.17388,27.36695|37.24083,27.38583|37.28611,27.37750|37.33333,27.35695|37.40055,27.30945|37.44777,27.29166|37.49444,27.28972|37.54472,27.30056|37.73638,27.39666|37.78194,27.39083|37.81416,27.35139|37.82972,27.28916|37.84499,27.24639|37.86444,27.20416|37.89277,27.15750|37.95638,27.07472|38.00139,27.05500|38.13611,27.05416|38.20166,27.03583|38.20361,26.97389|38.22944,26.93722|38.29361,26.90861|38.31833,26.84972|38.33555,26.77916|38.38027,26.79166|38.44749,26.84611|38.52138,26.88722|38.56666,26.88416|38.70111,26.82445|38.74056,26.85916|38.72292,26.90833|38.75610,26.93805|38.79333,26.90750|38.80639,26.84695|38.84333,26.81555|38.95805,26.79055|39.00166,26.76861|39.11610,26.68750|39.15972,26.66666|39.20389,26.66306|39.29695,26.66444|39.51111,26.69388|39.69777,26.72944|39.74222,26.73139|39.78527,26.70305|39.81611,26.65666|39.87389,26.71889|39.90416,26.80958|39.93027,26.90056|39.95527,26.94194|39.99403,26.98480|40.03249,27.01833|40.07749,27.04888|40.14360,27.10416|40.17387,27.16666|40.15943,27.20777|40.11610,27.23638|39.99208,27.28991|39.92833,27.34083|39.91166,27.38111|39.84111,27.64027|39.81305,27.75306|39.79027,27.79527|39.72610,27.84945|39.65834,27.87500|39.55333,27.95166|39.45305,28.04111|39.40805,28.06222|39.33806,28.08111|39.24249,28.09916|39.14889,28.10889|39.03277,28.13389|38.99985,28.16789|38.95916,28.19916|38.91166,28.21166|38.86222,28.20500|38.71000,28.13777|38.65972,28.13556|38.62222,28.16333|38.59628,28.22771|38.53027,28.22416|38.46305,28.26861|38.41750,28.25445|38.37028,28.22250|38.15111,28.24250|38.07611,28.25277|37.98000,28.28111|37.93250,28.30055|37.86583,28.34389|37.82416,28.38166|37.79722,28.42472|37.77972,28.46583|37.77055,28.51305|37.76194,28.60083|37.76277,28.66611|37.77472,28.80944|37.76138,28.85139|37.71583,28.87556|37.54194,28.75611|37.51749,28.71445|37.47916,28.62111|37.45277,28.58027|37.40722,28.56556|37.35055,28.56695|37.20722,28.57750|37.15916,28.58388|37.02499,28.63000|36.94555,28.64611|36.90055,28.64972|36.82583,28.64194|36.61833,28.60055|36.52305,28.56527|36.47055,28.55695|36.42055,28.57333|36.37611,28.61472|36.30527,28.69750|36.20583,28.82333|36.16888,28.86444|36.12222,28.90472|36.05138,28.94334|35.92777,28.97250|35.85222,28.98555|35.80166,28.98889|35.56666,28.96666|35.36416,28.93333|35.32000,28.92000|35.25306,28.86250|35.09638,28.86944|34.97277,28.89695|34.92528,28.88138|34.84254,28.88452'; 

/*
var geomAry = new Array(); 
geomAry = returnGeom1.split('|'); 
var XY = new Array(); 
var pointsg = []; 
for (var i = 0; i < geomAry.length; i++) 
{ 
XY = geomAry[i].split(','); 
//points.push( new GLatLng(parseFloat(XY[1]),parseFloat(XY[0]))) ; 
pointsg.push( new google.maps.LatLng(parseFloat(XY[1]), parseFloat(XY[0])) );

} 
//var dynRegionPolygon = new GPolygon(points,'#f33f00', 1, 1, '#ff0000', 0.2); 

*/

var geomAryreturnKSA = new Array();
var geomAryreturnGeomAsir = new Array();
var geomAryreturnGeomBahah = new Array();
var geomAryreturnGeomShamaliyah = new Array();
var geomAryreturnGeomJawf = new Array();

var geomAryreturnGeomMadinah = new Array();
var geomAryreturnGeomQasim = new Array();
var geomAryreturnGeomQurayyat = new Array();
var geomAryreturnGeomRiyad = new Array();
var geomAryreturnGeomSharqiyah = new Array();

var geomAryreturnGeomHail = new Array();
var geomAryreturnGeomJizan = new Array();
var geomAryreturnGeomMakkah = new Array();
var geomAryreturnGeomNajran = new Array();
var geomAryreturnGeomTabuk = new Array();
         

geomAryreturnKSA = returnGeomKSA.split('|'); 
geomAryreturnGeomAsir = returnGeomAsir.split('|'); 
geomAryreturnGeomBahah = returnGeomBahah.split('|'); 
geomAryreturnGeomShamaliyah = returnGeomShamaliyah.split('|'); 
geomAryreturnGeomJawf = returnGeomJawf.split('|');
 
geomAryreturnGeomMadinah = returnGeomMadinah.split('|'); 
geomAryreturnGeomQasim = returnGeomQasim.split('|'); 
geomAryreturnGeomQurayyat = returnGeomQurayyat.split('|'); 
geomAryreturnGeomRiyad = returnGeomRiyad.split('|'); 
geomAryreturnGeomSharqiyah = returnGeomSharqiyah.split('|'); 

geomAryreturnGeomHail = returnGeomHail.split('|'); 
geomAryreturnGeomJizan = returnGeomJizan.split('|'); 
geomAryreturnGeomMakkah = returnGeomMakkah.split('|'); 
geomAryreturnGeomNajran = returnGeomNajran.split('|'); 
geomAryreturnGeomTabuk = returnGeomTabuk.split('|');


var XY1 = new Array();
var XY2 = new Array();
var XY3 = new Array();
var XY4 = new Array();
var XY5 = new Array();

var XY6 = new Array(); 
var XY7 = new Array();
var XY8 = new Array();
var XY9 = new Array();
var XY10 = new Array();

var XY11 = new Array();
var XY12 = new Array();
var XY13 = new Array();
var XY14 = new Array();
var XY15 = new Array();

var pointsg1 = []; 
var pointsg2 = []; 
var pointsg3 = []; 
var pointsg4 = []; 
var pointsg5 = []; 

var pointsg6 = []; 
var pointsg7 = []; 
var pointsg8 = []; 
var pointsg9 = []; 
var pointsg10 = []; 

var pointsg11 = []; 
var pointsg12 = []; 
var pointsg13 = []; 
var pointsg14 = []; 
var pointsg15 = []; 

for (var i = 0; i < geomAryreturnKSA.length; i++) { 
	XY1 = geomAryreturnKSA[i].split(','); 
	pointsg1.push( new google.maps.LatLng(parseFloat(XY1[1]), parseFloat(XY1[0])) );
} 
for (var i = 0; i < geomAryreturnGeomAsir.length; i++) { 
	XY2 = geomAryreturnGeomAsir[i].split(','); 
	pointsg2.push( new google.maps.LatLng(parseFloat(XY2[1]), parseFloat(XY2[0])) );
} 
for (var i = 0; i < geomAryreturnGeomBahah.length; i++) { 
	XY3 = geomAryreturnGeomBahah[i].split(','); 
	pointsg3.push( new google.maps.LatLng(parseFloat(XY3[1]), parseFloat(XY3[0])) );
} 
for (var i = 0; i < geomAryreturnGeomShamaliyah.length; i++) { 
	XY4 = geomAryreturnGeomShamaliyah[i].split(','); 
	pointsg4.push( new google.maps.LatLng(parseFloat(XY4[1]), parseFloat(XY4[0])) );
} 
for (var i = 0; i < geomAryreturnGeomJawf.length; i++) { 
	XY5 = geomAryreturnGeomJawf[i].split(','); 
	pointsg5.push( new google.maps.LatLng(parseFloat(XY5[1]), parseFloat(XY5[0])) );
} 

for (var i = 0; i < geomAryreturnGeomMadinah.length; i++) { 
	XY6 = geomAryreturnGeomMadinah[i].split(','); 
	pointsg6.push( new google.maps.LatLng(parseFloat(XY6[1]), parseFloat(XY6[0])) );
} 
for (var i = 0; i < geomAryreturnGeomQasim.length; i++) { 
	XY7 = geomAryreturnGeomQasim[i].split(','); 
	pointsg7.push( new google.maps.LatLng(parseFloat(XY7[1]), parseFloat(XY7[0])) );
} 
for (var i = 0; i < geomAryreturnGeomQurayyat.length; i++) { 
	XY8 = geomAryreturnGeomQurayyat[i].split(','); 
	pointsg8.push( new google.maps.LatLng(parseFloat(XY8[1]), parseFloat(XY8[0])) );
} 
for (var i = 0; i < geomAryreturnGeomRiyad.length; i++) { 
	XY9 = geomAryreturnGeomRiyad[i].split(','); 
	pointsg9.push( new google.maps.LatLng(parseFloat(XY9[1]), parseFloat(XY9[0])) );
} 
for (var i = 0; i < geomAryreturnGeomSharqiyah.length; i++) { 
	XY10 = geomAryreturnGeomSharqiyah[i].split(','); 
	pointsg10.push( new google.maps.LatLng(parseFloat(XY10[1]), parseFloat(XY10[0])) );
} 

for (var i = 0; i < geomAryreturnGeomHail.length; i++) { 
	XY11 = geomAryreturnGeomHail[i].split(','); 
	pointsg11.push( new google.maps.LatLng(parseFloat(XY11[1]), parseFloat(XY11[0])) );
} 
for (var i = 0; i < geomAryreturnGeomJizan.length; i++) { 
	XY12 = geomAryreturnGeomJizan[i].split(','); 
	pointsg12.push( new google.maps.LatLng(parseFloat(XY12[1]), parseFloat(XY12[0])) );
} 
for (var i = 0; i < geomAryreturnGeomMakkah.length; i++) { 
	XY13 = geomAryreturnGeomMakkah[i].split(','); 
	pointsg13.push( new google.maps.LatLng(parseFloat(XY13[1]), parseFloat(XY13[0])) );
} 
for (var i = 0; i < geomAryreturnGeomNajran.length; i++) { 
	XY14 = geomAryreturnGeomNajran[i].split(','); 
	pointsg14.push( new google.maps.LatLng(parseFloat(XY14[1]), parseFloat(XY14[0])) );
} 
for (var i = 0; i < geomAryreturnGeomTabuk.length; i++) { 
	XY15 = geomAryreturnGeomTabuk[i].split(','); 
	pointsg15.push( new google.maps.LatLng(parseFloat(XY15[1]), parseFloat(XY15[0])) );
} 



dsalArray = dsalp.split('|');
for (var i = 0; i < dsalArray.length; i++) { 
	XYdsal = dsalArray[i].split(','); 
	dsalPoints.push( new google.maps.LatLng(parseFloat(XYdsal[0]), parseFloat(XYdsal[1])) );
}

powerArray = powerp.split('|');
for (var i = 0; i < powerArray.length; i++) { 
	XYpower = powerArray[i].split(','); 
	powerPoints.push( new google.maps.LatLng(parseFloat(XYpower[0]), parseFloat(XYpower[1])) );
}

//alert(dsalObjectArray.length)
for(var y=0; y<dsalObjectArray.length; y++){
	dsalPoints2.push({location: new google.maps.LatLng(dsalObjectArray[y].latitude, dsalObjectArray[y].longitude), weight: 0.5})
}
//alert(dsalObjectArray.length)

for(var y=0; y<2; y++){
	dsalPoints4.push(new google.maps.LatLng(dsalObjectArray[y].latitude, dsalObjectArray[y].longitude))
}

//var dynRegionPolygon = new GPolygon(points,'#f33f00', 1, 1, '#ff0000', 0.2); 

