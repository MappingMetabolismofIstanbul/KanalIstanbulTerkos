
var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    style: 'mapbox://styles/dogatmn/cm4v9fem6000p01sf12f769y5/draft',
    accessToken: 'pk.eyJ1IjoiZG9nYXRtbiIsImEiOiJjbHlyMTJmcXgwMjQ3MmtzbTRsdm1pejdsIn0.vcEjL7lt8OoOPMP5o1PM6g',
    showMarkers: false,
    markerColor: '#ff70ab',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: '#ff70ab'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Terkos Gölü / Terkos Lake',
    subtitle: '',
    byline: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    footer: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    chapters: [
        {
            id: '1',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
               center: [28.638, 41.310],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
          {
            id: '2',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
              center: [28.593,41.328],
                zoom: 12,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
          {
            id: '3',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/PsQ4KC0w/MEF-AAP-027-BAP-PART-II-2025-07-31-14-03-30.png',
            description: '',
            location: {
              center: [28.593,41.328],
                zoom: 12,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '4',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/b5rtxM2Q/MEF-AAP-027-BAP-PART-II-2025-07-31-14-03-40.png',
            description: '',
            location: {
                 center: [28.593,41.328],
                zoom: 14,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '5',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/5xYCqy38/MEF-AAP-027-BAP-PART-II-2025-07-31-14-12-28.png',
            description: '',
            location: {
                 center: [28.593,41.328],
                zoom: 14,
                pitch: 40,
                bearing: 0,
        
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '6',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/gbHn1Qr9/MEF-AAP-027-BAP-PART-II-2025-07-31-14-13-28.png',
            description: '',
            location: {
                center: [28.593,41.328],
                zoom: 16,
                pitch: 10,
                bearing: 0,
              
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'right',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: '7',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/pGrcw9R/MEF-AAP-027-BAP-PART-II-2025-07-31-14-19-08.png',
            description: '',
            location: {
                center: [28.593,41.328],
                zoom: 12,
                pitch: 10,
                bearing: 0,
              
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
          {
            id: '8',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/Hp3SqmG6/MEF-AAP-027-BAP-PART-II-2025-07-31-14-24-37.png',
            description: '',
            location: {
                center: [28.593,41.328],
                zoom: 12,
                pitch: 10,
                bearing: 0,
               
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
             mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: '9',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/SX1Qrnt7/MEF-AAP-027-BAP-PART-II-2025-07-31-14-27-34.png',
            description: '',
            location: {
               center: [28.593,41.328],
                zoom: 15,
                pitch: 10,
                bearing: 0,
              
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: '10',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/675JHsBM/MEF-AAP-027-BAP-PART-II-2025-07-31-14-37-42.png',
            description: '',
            location: {
               center: [28.593,41.328],
                zoom: 17,
                pitch: 10,
                bearing: 0,
               
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: '11',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/nMgGj755/MEF-AAP-027-BAP-PART-II-2025-07-31-15-09-19.png',
            description: '',
            location: {
                center: [28.674,41.301],
                zoom: 15,
                pitch: 10,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '12',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/JFQPvkTW/MEF-AAP-027-BAP-PART-II-2025-07-31-14-29-41.png',
            description: '',
            location: {
                center: [28.674,41.301],
                zoom: 16,
                pitch: 10,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '13',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/ynVsDHVg/MEF-AAP-027-BAP-PART-II-2025-08-10-10-48-59.png',
            description: '',
            location: {
                center: [28.674,41.301],
                zoom: 16,
                pitch: 10,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '14',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/Q7r3KYtd/MEF-AAP-027-BAP-PART-II-2025-07-31-14-30-02.png',
            description: '',
            location: {
                center: [28.674,41.301],
                zoom: 16,
                pitch: 10,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
