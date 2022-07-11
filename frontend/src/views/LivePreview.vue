<template>
    <div>
        <div v-if="! options.isReady">
            <PreviewNotReady />
        </div>
        <div class="grid h-screen w-full place-items-center gap-y-0">
            <div class="flex space-x-4">
                <a href="" ref="downloadLink" class="py-3 px-6 rounded-full bg-blue-600 text-white flex justify-left space-x-3 shadow-lg items-center">
                    <i class="fa-solid fa-download"></i>
                    <span>Download</span>
                </a>
                <button @click="stop" class="py-3 px-6 rounded-full bg-red-600 text-white flex justify-left space-x-3 shadow-lg items-center">
                    <i class="fa-solid fa-microphone-slash"></i>
                    <span>Stop Recording</span>
                </button>
            </div>
            <div class="relative">
                <video ref="videoOutput" autoplay height='680' width="840" muted></video>
                <video class="absolute top-0 right-2 rounded-full" ref="cameraOutput" autoplay height='100' width="100" muted></video>
            </div>
            
            
        </div>
        
    </div>
    
</template>

<script setup>
import PreviewNotReady from '../components/PreviewNotReady.vue'

import { computed, onBeforeMount, onMounted, ref, toRaw } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
const store = useStore();

const options = JSON.parse(JSON.stringify(store.state.options));

const router = useRouter();

onBeforeMount(() => {

    // check options and initiate the action respectively

    if(options.recordScreen && options.recordCamera){
        recordScreenAndCamera();
    }else{
        if(options.recordAudio){     
            recordAudio();
        }

        if(options.recordScreen){
            recordScreen();
        }

        if(options.recordCamera){
            
            recordVideo();
        }
    }
    

});

let shouldStop = false;
let stopped = false;
let videoElement;
let cameraElement;
const videoOutput = ref(null);
const cameraOutput = ref(null);
let downloadLink = ref(null);

onMounted(() => {
    videoElement = videoOutput.value;
    cameraElement = cameraOutput.value;
    downloadLink = downloadLink.value;
});

const stop = () => {
    shouldStop = true;
    updateOptions();
}

const audioRecordConstraints = {
        echoCancellation: true
    }

    const handleRecord = function ({stream, mimeType}) {
        
        let recordedChunks = [];
        stopped = false;
        const mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = function (e) {
            if (e.data.size > 0) {
                recordedChunks.push(e.data);
            }

            if (shouldStop === true && stopped === false) {
                mediaRecorder.stop();
                stopped = true;
            }
        };

        mediaRecorder.onstop = function () {
            const blob = new Blob(recordedChunks, {
                type: mimeType
            });
            recordedChunks = []
            const filename = window.prompt('Enter file name');
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = `${filename || 'recording'}.webm`;
            videoElement.srcObject = null;
            cameraElement.srcObject = null;
        };

        mediaRecorder.start(200);
    };

    const handleRecord2 = function ({stream, mimeType}) {
        
        let recordedChunks = [];
        stopped = false;
        const mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = function (e) {
            if (e.data.size > 0) {
                recordedChunks.push(e.data);
            }

            if (shouldStop === true && stopped === false) {
                mediaRecorder.stop();
                stopped = true;
            }
        };

        mediaRecorder.onstop = function () {
            const blob = new Blob(recordedChunks, {
                type: mimeType
            });
            recordedChunks = []
            
            cameraElement.srcObject = null;
        };

        mediaRecorder.start(200);
    };

    async function recordAudio() {
        const mimeType = 'audio/webm';
        shouldStop = false;
        const stream = await navigator.mediaDevices.getUserMedia({audio: audioRecordConstraints});
        handleRecord({stream, mimeType})
    }

    async function recordVideo() {
        const mimeType = 'video/webm';
        shouldStop = false;
        const constraints = {
            audio: {
                "echoCancellation": true
            },
            video: {
                "width": {
                    "min": 640,
                    "max": 1024
                },
                "height": {
                    "min": 480,
                    "max": 768
                }
            }
        };
        const stream = await navigator.mediaDevices.getUserMedia(constraints);

        cameraElement.srcObject = stream;
        
        handleRecord({stream, mimeType})
    }

    async function recordVideoOnly() {
        const mimeType = 'video/webm';
        shouldStop = false;
        const constraints = {
            audio: {
                "echoCancellation": true
            },
            video: {
                "width": {
                    "min": 640,
                    "max": 1024
                },
                "height": {
                    "min": 480,
                    "max": 768
                }
            }
        };
        const stream = await navigator.mediaDevices.getUserMedia(constraints);

        cameraElement.srcObject = stream;
        
        // handleRecord2({stream, mimeType})
    }

    async function recordScreen() {
        const mimeType = 'video/webm';
        shouldStop = false;
        const constraints = {
            video: {
                cursor: 'motion'
            }
        };
        if(!(navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia)) {
            return window.alert('Screen Record not supported!')
        }
        let stream = null;
        const displayStream = await navigator.mediaDevices.getDisplayMedia({video: {cursor: "motion"}, audio: {'echoCancellation': true}});
        if(window.confirm("Record audio with screen?")){
            const audioContext = new AudioContext();

            const voiceStream = await navigator.mediaDevices.getUserMedia({ audio: {'echoCancellation': true}, video: false });
            const userAudio = audioContext.createMediaStreamSource(voiceStream);
            
            const audioDestination = audioContext.createMediaStreamDestination();
            userAudio.connect(audioDestination);

            if(displayStream.getAudioTracks().length > 0) {
                const displayAudio = audioContext.createMediaStreamSource(displayStream);
                displayAudio.connect(audioDestination);
            }

            const tracks = [...displayStream.getVideoTracks(), ...audioDestination.stream.getTracks()]
            stream = new MediaStream(tracks);
            handleRecord({stream, mimeType})
        } else {
            stream = displayStream;
            handleRecord({stream, mimeType});
        };
        videoElement.srcObject = stream;
    }

    async function recordScreenAndCamera() {
        const mimeType = 'video/webm';
        shouldStop = false;
        const constraints = {
            video: {
                cursor: 'motion'
            }
        };
        if(!(navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia)) {
            return window.alert('Screen Record not supported!')
        }
        let stream = null;
        const displayStream = await navigator.mediaDevices.getDisplayMedia({video: {cursor: "motion"}, audio: {'echoCancellation': true}});
        if(window.confirm("Record audio with screen?")){

            const audioContext = new AudioContext();

            await recordVideoOnly();

            const voiceStream = await navigator.mediaDevices.getUserMedia({ audio: {'echoCancellation': true}, video: false });
            const userAudio = audioContext.createMediaStreamSource(voiceStream);
            
            const audioDestination = audioContext.createMediaStreamDestination();
            userAudio.connect(audioDestination);

            if(displayStream.getAudioTracks().length > 0) {
                const displayAudio = audioContext.createMediaStreamSource(displayStream);
                displayAudio.connect(audioDestination);
            }

            const tracks = [...displayStream.getVideoTracks(), ...audioDestination.stream.getTracks()]
            stream = new MediaStream(tracks);
            handleRecord({stream, mimeType})
        } else {
            stream = displayStream;
            handleRecord({stream, mimeType});
        };
        videoElement.srcObject = stream;
    }

const updateOptions = () => {
    options.isReady = false;
    options.recordAudio = false;
    options.recordCamera = false;
    options.recordScreen = false;
    store.dispatch('updateOptions', options).then((res) => {
        if(res.success){
            console.log(res);

        }
    });
}

</script>


<style scoped>

</style>