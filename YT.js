	const API_KEY = 'AIzaSyBGuNILP7_ePJw3PJxGtU11A3lDzwIMd28';
    const VIDEO_ID = 'W01L70IGBgE';
    const URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${VIDEO_ID}&key=${API_KEY}`;

    // Make sure the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        const contentDiv = document.getElementById('about-content');

        // Fetch YouTube video details
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                if (data.items && data.items.length > 0) {
                    const videoData = data.items[0].snippet;
                    const videoTitle = videoData.title;
                    const videoDescription = videoData.description;

                    // Display the fetched video details and embed the YouTube video at the top
                    contentDiv.innerHTML = `
                        <h2>${videoTitle}</h2>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${VIDEO_ID}" 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                            gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>${videoDescription}</p>
                    ` + contentDiv.innerHTML;  // Prepend the video and description
                } else {
                    contentDiv.innerHTML = `<p>No video data found.</p>` + contentDiv.innerHTML;
                }
            })
            .catch(error => {
                console.error('Error fetching YouTube data:', error);
                contentDiv.innerHTML = `<p>Unable to load video data. Please try again later.</p>` + contentDiv.innerHTML;
            });
    });