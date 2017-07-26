#docker file

# Use an official node image
FROM hypriot/rpi-node

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# Install any needed packages
RUN npm install

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
# ENV NAME World

# Run index.js when the container launches
CMD ["node", "index.js"]
