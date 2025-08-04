# Image Setup Instructions

## Important: Move Images to Public Folder

The website is currently looking for images in the `/public/images/` directory, but they are currently in `/src/images/`. 

### Steps to Fix Images:

1. **Create the public/images directory** (if it doesn't exist):
   ```
   mkdir public/images
   ```

2. **Move all images from src/images to public/images**:
   ```
   mv src/images/* public/images/
   ```

3. **Required Images**:
   - `logo.png` - Company logo
   - `airplane-aircraft-travel-trip.jpg` - For flights/travel sections
   - `group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-studying-bench-with-school-items-laptops-notebooks.jpg` - For study abroad sections
   - `two-us-passports-held-hand.jpg` - For visa assistance sections
   - `african-american-couple-loading-baggage-vehicle-leave-holiday-vacation-trip-partners-travelling-by-car-with-luggage-suitcase-bags-go-summer-adventure-cityscape.jpg` - For travel/jobs sections

### After Moving Images:

The website will automatically display:
- ✅ Logo in navigation and footer
- ✅ Hero section slideshow with real images
- ✅ Service page backgrounds with relevant images
- ✅ Enhanced visual appeal throughout the site

### File Structure Should Be:
```
patrick-travel-website/
├── public/
│   └── images/
│       ├── logo.png
│       ├── airplane-aircraft-travel-trip.jpg
│       ├── group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-studying-bench-with-school-items-laptops-notebooks.jpg
│       ├── two-us-passports-held-hand.jpg
│       └── african-american-couple-loading-baggage-vehicle-leave-holiday-vacation-trip-partners-travelling-by-car-with-luggage-suitcase-bags-go-summer-adventure-cityscape.jpg
├── src/
│   └── (other source files)
```

This is the standard Next.js way of serving static assets.
