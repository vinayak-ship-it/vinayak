document.getElementById('convertBtn').addEventListener('click', function () {
    const fileInput = document.getElementById('pdfUpload');
    const mp3Player = document.getElementById('mp3Player');
    const downloadLink = document.getElementById('downloadLink');

    if (fileInput.files.length === 0) {
        alert('Please upload a PDF file first.');
        return;
    }

    // Simulate conversion process (replace with actual backend API call)
    alert('Conversion started. Please wait...');
    setTimeout(() => {
        // Simulate a dummy MP3 file for demonstration
        const dummyMp3Url = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
        mp3Player.src = dummyMp3Url;
        mp3Player.style.display = 'block';

        downloadLink.href = dummyMp3Url;
        downloadLink.download = 'converted-file.mp3';
        downloadLink.style.display = 'block';

        alert('Conversion complete!');
    }, 3000); // Simulate a 3-second delay
});
