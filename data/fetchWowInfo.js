// fetchWowInfo.js
const wowUrl = "https://api.rosta.dev/wowcharacter";

export async function fetchWowInfo() {
    try {
        const response = await fetch(wowUrl);
        const jsonContent = await response.json();
        if (jsonContent) {
            const character = jsonContent;

            const mainRawAsset = character.media.assets.find(asset => asset.key === 'main-raw');
            const mainRawUrl = mainRawAsset ? mainRawAsset.value : "Unknown";

            const characterImg = character.media.assets.find(asset => asset.key === 'avatar');
            const characterImgUrl = characterImg ? characterImg.value : "Unknown";
            

            return {
                name: character.name,
                realm: character.realm ? character.realm.name : "Unknown",
                level: character.level,
                class: character.character_class ? character.character_class.name : "Unknown",
                race: character.race ? character.race.name : "Unknown",
                lastLogin: character.last_login_timestamp ? new Date(character.last_login_timestamp).toLocaleString() : "Unknown",
                achievementPoints: character.achievement_points,
                faction: character.faction ? character.faction.name : "Unknown",
                gender: character.gender ? character.gender.name : "Unknown",
                equippedItemLevel: character.equipped_item_level,
                averageItemLevel: character.average_item_level,
                title: character.active_title ? character.active_title.name : "",
                guild: character.guild ? character.guild.name : "Unknown",
                imageurl: mainRawUrl,
                specialization: character.active_spec ? character.active_spec.name : "Unknown",
                characterimg: characterImgUrl
            };
        } else {
            console.log("No character found.");
            return null;
        }
    } catch (error) {
        console.error("Error fetching WoW character info:", error);
        return null;
    }
}