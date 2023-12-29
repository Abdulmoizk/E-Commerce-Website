let categories = {
    fashion: {
        men: {
            traditionalWear: {
                brands: ["Sartorial Elegance", "Urban Dapper", "Heritage Threads"],
                styles: ["Sherwani", "Kurta-Pajama", "Pathani Suit"],
                colors: ["Ivory", "Charcoal", "Emerald Green"],
                priceRange: "$99.99 - $399.99"
            },
            casualFootwear: {
                brands: ["StrideSmart", "Urban Kicks", "Weekend Vibes"],
                styles: ["Sneakers", "Loafers", "Canvas Shoes"],
                colors: ["Navy Blue", "Tan", "Burgundy"],
                priceRange: "$49.99 - $129.99"
            }
        },
        women: {
            ethnicEnsembles: {
                brands: ["Radiant Charisma", "Femme Vogue", "Ethereal Essence"],
                styles: ["Anarkali Suit", "Lehenga Choli", "Palazzo Set"],
                colors: ["Crimson Red", "Royal Blue", "Mint Green"],
                priceRange: "$149.99 - $599.99"
            },
            readyToWear: {
                brands: ["Chic Couture", "Stylish Silhouettes", "Urbane Allure"],
                styles: ["Dresses", "Jumpsuits", "Blouses"],
                colors: ["Blush Pink", "Monochrome Stripes", "Mustard Yellow"],
                priceRange: "$79.99 - $249.99"
            }
        },
        kids: {
            playfulAttire: {
                brands: ["Tiny Tots Trend", "Kiddie Chic", "Whiz Kidz"],
                styles: ["Cute Rompers", "Colorful Tees", "Adorable Dresses"],
                colors: ["Bubblegum Pink", "Sky Blue", "Sunny Yellow"],
                priceRange: "$19.99 - $69.99"
            }
        },  
    },
    beauty: {
        makeup: {
            foundation: {
                brand: ["Maybelline", "L'Oreal", "Fenty Beauty", "MAC", "Revlon"],
                type: ["Liquid", "Powder", "Stick"],
                price: 29.99,
                collection: "Matte Finish"
            },
            lipstick: {
                brand: ["NYX", "Sephora", "Urban Decay", "ColourPop", "Clinique"],
                shades: ["Red", "Nude", "Pink", "Berry"],
                price: 14.99,
                collection: "Velvet Matte"
            },
            eyeshadowPalette: {
                brand: ["Anastasia Beverly Hills", "Huda Beauty", "Too Faced", "Morphe", "NARS"],
                colors: ["Neutral", "Smokey", "Bold"],
                price: 39.99,
                collection: "Shimmer & Matte"
            }
        },
        skincare: {
            cleanser: {
                brand: ["Cetaphil", "Neutrogena", "La Roche-Posay", "Clinique", "Garnier"],
                type: ["Gel", "Foam", "Micellar Water"],
                price: 19.99,
                collection: "Hydrating"
            },
            moisturizer: {
                brand: ["Olay", "CeraVe", "The Ordinary", "Kiehl's", "Burt's Bees"],
                type: ["Day Cream", "Night Cream", "Gel"],
                price: 24.99,
                collection: "Anti-Aging"
            },
            faceMask: {
                brand: ["Origins", "GlamGlow", "Lush", "Peter Thomas Roth", "Sephora Collection"],
                types: ["Clay", "Sheet", "Peel-off"],
                price: 9.99,
                collection: "Detoxifying"
            }
        },
        fragrance: {
            perfume: {
                brand: ["Chanel", "Dior", "Gucci", "Versace", "YSL"],
                notes: ["Floral", "Citrus", "Woody", "Spicy"],
                price: 79.99,
                collection: "Eau de Parfum"
            },
            bodyMist: {
                brand: ["Bath & Body Works", "Victoria's Secret", "Hollister", "The Body Shop", "Calvin Klein"],
                scents: ["Fruity", "Fresh", "Sweet"],
                price: 14.99,
                collection: "Summer Edition"
            }
        }
    },
    furniture: {
        livingRoom: {
            sofa: {
                brand: ["IKEA", "Ashley Furniture", "West Elm", "La-Z-Boy", "Crate & Barrel"],
                type: ["Sectional", "Sofa Set", "Recliner"],
                price: 899.99,
                material: ["Leather", "Fabric", "Microfiber"],
                style: ["Modern", "Traditional", "Mid-Century"]
            },
            coffeeTable: {
                brand: ["Wayfair", "Target", "Pottery Barn", "Urban Outfitters", "CB2"],
                shape: ["Rectangular", "Round", "Square"],
                price: 149.99,
                material: ["Wood", "Glass", "Metal"],
                color: ["Walnut", "White", "Black"]
            },
            rug: {
                brand: ["Ruggable", "Safavieh", "nuLOOM", "Mohawk", "Home Dynamix"],
                size: ["5x7", "8x10", "Runner"],
                price: 79.99,
                pattern: ["Geometric", "Traditional", "Bohemian"]
            }
        },
        bedroom: {
            bed: {
                brand: ["Casper", "IKEA", "Serta", "Zinus", "Pottery Barn"],
                size: ["Queen", "King", "Full"],
                price: 599.99,
                style: ["Platform", "Canopy", "Upholstered"]
            },
            dresser: {
                brand: ["West Elm", "Raymour & Flanigan", "Room & Board", "IKEA", "Ashley Furniture"],
                size: ["3-Drawer", "6-Drawer", "Tall"],
                price: 299.99,
                color: ["Espresso", "White", "Gray"]
            },
            bedsideTable: {
                brand: ["Target", "Bed Bath & Beyond", "Wayfair", "IKEA", "Amazon"],
                style: ["Nightstand", "Accent Table", "End Table"],
                price: 79.99,
                material: ["Wood", "Metal", "Glass"]
            }
        },
        decor: {
            wallArt: {
                brand: ["Etsy", "Society6", "IKEA", "Hobby Lobby", "Target"],
                type: ["Canvas Print", "Wall Tapestry", "Framed Art"],
                price: 49.99,
                theme: ["Abstract", "Nature", "Typography"]
            },
            lighting: {
                brand: ["Lamps Plus", "Wayfair", "Home Depot", "CB2", "West Elm"],
                type: ["Chandelier", "Floor Lamp", "Table Lamp"],
                price: 89.99,
                style: ["Modern", "Industrial", "Bohemian"]
            },
            throwPillows: {
                brand: ["Pier 1", "Bed Bath & Beyond", "Target", "Anthropologie", "West Elm"],
                size: ["18x18", "20x20", "Decorative Shapes"],
                price: 24.99,
                material: ["Cotton", "Velvet", "Linen"]
            }
        }
    },
    kitchenAppliances: {
        kitchen: {
            stove: {
                brand: ["Samsung", "Whirlpool", "LG", "GE", "Bosch"],
                type: ["Gas", "Electric", "Induction"],
                price: 699.99,
                features: ["Convection Oven", "Touch Controls", "Self-Cleaning"]
            },
            microwave: {
                brand: ["Panasonic", "Sharp", "LG", "Samsung", "Breville"],
                type: ["Countertop", "Over-the-Range", "Built-in"],
                price: 149.99,
                features: ["Inverter Technology", "Sensor Cooking", "Grill Function"]
            },
            blender: {
                brand: ["Vitamix", "Ninja", "KitchenAid", "Blendtec", "Hamilton Beach"],
                type: ["Countertop", "Personal", "Immersion"],
                price: 89.99,
                features: ["Variable Speed", "Pulse Function", "Ice Crushing"]
            }
        },
        refrigeration: {
            refrigerator: {
                brand: ["LG", "Samsung", "Whirlpool", "GE", "Frigidaire"],
                type: ["French Door", "Side-by-Side", "Top Freezer"],
                price: 1299.99,
                features: ["Ice Maker", "Water Dispenser", "Smart Technology"]
            },
            freezer: {
                brand: ["Kenmore", "Haier", "Maytag", "Danby", "Amana"],
                type: ["Chest", "Upright"],
                price: 499.99,
                features: ["Frost-Free", "Adjustable Shelves", "Energy Efficient"]
            }
        },
        smallAppliances: {
            coffeeMaker: {
                brand: ["Keurig", "Breville", "Hamilton Beach", "Cuisinart", "Nespresso"],
                type: ["Drip", "Single Serve", "Espresso"],
                price: 49.99,
                features: ["Programmable", "Built-in Grinder", "Pod Compatibility"]
            },
            toaster: {
                brand: ["Breville", "KitchenAid", "Cuisinart", "Hamilton Beach", "Oster"],
                type: ["2-Slice", "4-Slice", "Toaster Oven"],
                price: 29.99,
                features: ["Bagel Setting", "Defrost Function", "Crumb Tray"]
            }
        },

        mobile: {
            smartphones: {
                brand: ["Apple", "Samsung", "Google", "OnePlus", "Xiaomi"],
                model: ["iPhone 13", "Galaxy S21", "Pixel 6", "OnePlus 9", "Redmi Note 10"],
                operatingSystem: ["iOS", "Android"],
                price: 799.99,
                features: ["5G Connectivity", "High-Resolution Camera", "Face ID/Fingerprint Sensor"]
            },
            phoneCases: {
                brand: ["Spigen", "OtterBox", "Caseology", "Supcase", "Ringke"],
                type: ["Slim Fit", "Heavy Duty", "Clear", "Leather"],
                price: 19.99,
                compatibleModels: ["iPhone 13", "Galaxy S21", "Pixel 6", "OnePlus 9", "Redmi Note 10"]
            },
            headphones: {
                brand: ["Sony", "Bose", "Apple", "JBL", "Sennheiser"],
                type: ["Over-Ear", "In-Ear", "True Wireless"],
                price: 129.99,
                features: ["Noise Cancelling", "Bluetooth Connectivity", "Touch Controls"]
            },
            chargers: {
                brand: ["Anker", "Belkin", "RAVPower", "Samsung", "Apple"],
                type: ["Wireless Charger", "Wall Charger", "Car Charger"],
                price: 29.99,
                compatibleDevices: ["iPhone", "Samsung Galaxy", "Google Pixel", "OnePlus", "Qi-Enabled Devices"]
            },
            screenProtectors: {
                brand: ["ZAGG", "Spigen", "amFilm", "Tech Armor", "Maxboost"],
                type: ["Tempered Glass", "Film"],
                price: 14.99,
                compatibleModels: ["iPhone 13", "Galaxy S21", "Pixel 6", "OnePlus 9", "Redmi Note 10"]
            },
            powerBanks: {
                brand: ["Anker", "RAVPower", "Xiaomi", "Mophie", "AUKEY"],
                capacity: ["5000mAh", "10000mAh", "20000mAh"],
                price: 39.99,
                compatibleDevices: ["Smartphones", "Tablets", "Laptops"]
            }
        },

    }
}
