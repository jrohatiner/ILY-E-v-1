
        document.querySelector('form').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const fileInput = document.getElementById('fileInput');
            const file = fileInput.files[0];
            
            if (!file) {
                alert('Please select a file to upload.');
                return;
            }
            
            const formData = new FormData();
            formData.append('file', file);
            
            try {
                const response = await fetch('./camera-uploads/images/', {
                    method: 'POST',
                    body: formData
                });
                
                if (response.ok) {
                    alert('File uploaded successfully!');
                } else {
                    alert('File upload failed.');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });