class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(
      `${this.uploader} watched all ${this.time} seconds of ${this.title}!`
    );
  }
}


const video1 = new Video("Funny Cats Compilation", "User123", 300);
video1.watch(); 

const video2 = new Video("Cooking Tutorial", "ChefCook", 600);
video2.watch(); 

const videosArray = [
  new Video("Travel Vlog", "Adventurer1", 900),
  new Video("Guitar Lesson", "MusicLover", 480),
  new Video("Fitness Workout", "FitFreak", 720),
  new Video("DIY Crafts", "CreativeMinds", 540),
  new Video("Tech Review", "GadgetGuru", 360),
];

videosArray.forEach((video) => video.watch());
