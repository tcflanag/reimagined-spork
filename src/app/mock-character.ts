
export const MOCK_XML: string = `
<D20Character game-system="D&amp;D4E" Version="0.07a" legality="rules-legal" >
   <!--
      Dungeons and Dragons Insider: Character Builder character save file
   -->


   <CharacterSheet>


      <Details>
         <name> Cliff </name>
         <Level> 12 </Level>
         <Player>  </Player>
         <Height> 5&apos;7&quot; </Height>
         <Weight> 170 </Weight>
         <Gender>  </Gender>
         <Age> 24 </Age>
         <Alignment>  </Alignment>
         <Company>  </Company>
         <Portrait>  </Portrait>
         <Experience> 32000 </Experience>
         <CarriedMoney> 8 pp; 309 gp; 8 cp </CarriedMoney>
         <StoredMoney> 4,680 pp </StoredMoney>
         <Traits>  </Traits>
         <Appearance>  </Appearance>
         <Companions>  </Companions>
         <Notes>  </Notes>
      </Details>

      <!--
         Base ability scores (see stats of same name for final adjusted score)
      -->
      <AbilityScores legality="rules-legal" >
         <Strength score="16" />
         <Constitution score="13" />
         <Dexterity score="14" />
         <Intelligence score="10" />
         <Wisdom score="14" />
         <Charisma score="8" />
      </AbilityScores>


      <!--
         Final computed stat values - the various numbers
         on the character sheet are here along with behind the scenes
         values to build them.
      -->
      <StatBlock>
         <Stat value="21" >
            <alias name="Strength" />
            <alias name="STR" />
            <statadd value="16" />
            <statadd Level="1" value="2" charelem="1" />
            <statadd Level="4" value="1" charelem="2" />
            <statadd Level="8" value="1" charelem="3" />
            <statadd Level="11" value="1" charelem="4" />
         </Stat>

         <Stat value="14" >
            <alias name="Constitution" />
            <alias name="con" />
            <statadd value="13" />
            <statadd Level="11" value="1" charelem="4" />
         </Stat>

         <Stat value="17" >
            <alias name="Dexterity" />
            <alias name="DEX" />
            <statadd value="14" />
            <statadd Level="4" value="1" charelem="5" />
            <statadd Level="8" value="1" charelem="6" />
            <statadd Level="11" value="1" charelem="4" />
         </Stat>

         <Stat value="11" >
            <alias name="Intelligence" />
            <alias name="INT" />
            <statadd value="10" />
            <statadd Level="11" value="1" charelem="4" />
         </Stat>

         <Stat value="17" >
            <alias name="Wisdom" />
            <alias name="WIS" />
            <statadd value="14" />
            <statadd Level="1" value="2" charelem="7" />
            <statadd Level="11" value="1" charelem="4" />
         </Stat>

         <Stat value="9" >
            <alias name="Charisma" />
            <alias name="CHA" />
            <statadd value="8" />
            <statadd Level="11" value="1" charelem="4" />
         </Stat>

         <Stat value="5" >
            <alias name="Strength modifier" />
            <statadd Level="1" value="1" statlink="Strength" abilmod="true" charelem="8" />
         </Stat>

         <Stat value="3" >
            <alias name="Dexterity modifier" />
            <statadd Level="1" value="1" statlink="Dexterity" abilmod="true" charelem="8" />
         </Stat>

         <Stat value="2" >
            <alias name="Constitution modifier" />
            <statadd Level="1" value="1" statlink="Constitution" abilmod="true" charelem="8" />
         </Stat>

         <Stat value="0" >
            <alias name="Intelligence modifier" />
            <statadd Level="1" value="1" statlink="Intelligence" abilmod="true" charelem="8" />
         </Stat>

         <Stat value="3" >
            <alias name="Wisdom modifier" />
            <statadd Level="1" value="1" statlink="Wisdom" abilmod="true" charelem="8" />
         </Stat>

         <Stat value="-1" >
            <alias name="Charisma modifier" />
            <statadd Level="1" value="1" statlink="Charisma" abilmod="true" charelem="8" />
         </Stat>

         <Stat value="29" >
            <alias name="AC" />
            <alias name="Armor Class" />
            <statadd Level="1" value="10" charelem="8" />
            <statadd Level="1" value="1" statlink="HALF-LEVEL" charelem="8" />
            <statadd type="Ability" Level="1" not-wearing="armor:heavy" value="1" statlink="Dexterity" abilmod="true" charelem="8" />
            <statadd type="Ability" Level="1" not-wearing="armor:heavy" value="1" statlink="Intelligence" abilmod="true" charelem="8" />
            <statadd type="Defensive" Level="1" wearing="DEFENSIVE:" value="1" charelem="8" />
            <statadd type="Armor" Level="12" value="9" charelem="9" />
            <statadd type="Enhancement" Level="12" value="4" charelem="10" />
         </Stat>

         <Stat value="31" >
            <alias name="Fortitude Defense" />
            <alias name="Fortitude" />
            <statadd Level="1" value="10" charelem="8" />
            <statadd Level="1" value="1" statlink="HALF-LEVEL" charelem="8" />
            <statadd type="Ability" Level="1" value="1" statlink="Strength" abilmod="true" charelem="8" />
            <statadd type="Ability" Level="1" value="1" statlink="Constitution" abilmod="true" charelem="8" />
            <statadd type="Class" Level="1" value="1" statlink="Fortitude Defense Class Bonus" charelem="8" />
            <statadd type="Feat" Level="11" value="1" statlink="Improved Defenses" charelem="11" />
            <statadd type="Enhancement" Level="12" value="4" charelem="12" />
            <statadd type="Armor" Level="12" value="2" charelem="9" />
         </Stat>

         <Stat value="25" >
            <alias name="Reflex Defense" />
            <alias name="Reflex" />
            <statadd Level="1" value="10" charelem="8" />
            <statadd Level="1" value="1" statlink="HALF-LEVEL" charelem="8" />
            <statadd type="Ability" Level="1" value="1" statlink="Dexterity" abilmod="true" charelem="8" />
            <statadd type="Ability" Level="1" value="1" statlink="Intelligence" abilmod="true" charelem="8" />
            <statadd type="Class" Level="1" value="1" statlink="Reflex Defense Class Bonus" charelem="8" />
            <statadd type="Feat" Level="11" value="1" statlink="Improved Defenses" charelem="11" />
            <statadd type="Enhancement" Level="12" value="4" charelem="12" />
            <statadd Level="12" requires="!Armor Proficiency (Scale)" value="-2" charelem="9" />
         </Stat>

         <Stat value="26" >
            <alias name="Will Defense" />
            <alias name="Will" />
            <statadd Level="1" value="10" charelem="8" />
            <statadd Level="1" value="1" statlink="HALF-LEVEL" charelem="8" />
            <statadd type="Ability" Level="1" value="1" statlink="Wisdom" abilmod="true" charelem="8" />
            <statadd type="Ability" Level="1" value="1" statlink="Charisma" abilmod="true" charelem="8" />
            <statadd type="Class" Level="1" value="1" statlink="Will Defense Class Bonus" charelem="8" />
            <statadd type="Feat" Level="11" value="1" statlink="Improved Defenses" charelem="11" />
            <statadd type="item" Level="12" value="1" charelem="13" />
            <statadd type="Enhancement" Level="12" value="4" charelem="12" />
         </Stat>

         <Stat value="3" >
            <alias name="Death Saves Count" />
            <statadd Level="1" value="3" charelem="8" />
         </Stat>

         <Stat value="12" >
            <alias name="Level" />
            <statadd Level="1" value="1" charelem="8" />
            <statadd Level="2" value="1" charelem="14" />
            <statadd Level="3" value="1" charelem="15" />
            <statadd Level="4" value="1" charelem="16" />
            <statadd Level="5" value="1" charelem="17" />
            <statadd Level="6" value="1" charelem="18" />
            <statadd Level="7" value="1" charelem="19" />
            <statadd Level="8" value="1" charelem="20" />
            <statadd Level="9" value="1" charelem="21" />
            <statadd Level="10" value="1" charelem="22" />
            <statadd Level="11" value="1" charelem="4" />
            <statadd Level="12" value="1" charelem="23" />
         </Stat>

         <Stat value="95" >
            <alias name="Hit Points" />
            <statadd type="Level 1" Level="1" value="1" statlink="Constitution" charelem="8" />
            <statadd Level="1" value="1" statlink="_LEVEL-ONE-HPS" charelem="8" />
            <statadd Level="2" value="1" statlink="_PER-LEVEL-HPS" charelem="14" />
            <statadd Level="3" value="1" statlink="_PER-LEVEL-HPS" charelem="15" />
            <statadd Level="4" value="1" statlink="_PER-LEVEL-HPS" charelem="16" />
            <statadd Level="5" value="1" statlink="_PER-LEVEL-HPS" charelem="17" />
            <statadd Level="6" value="1" statlink="_PER-LEVEL-HPS" charelem="18" />
            <statadd Level="7" value="1" statlink="_PER-LEVEL-HPS" charelem="19" />
            <statadd Level="8" value="1" statlink="_PER-LEVEL-HPS" charelem="20" />
            <statadd Level="9" value="1" statlink="_PER-LEVEL-HPS" charelem="21" />
            <statadd Level="10" value="1" statlink="_PER-LEVEL-HPS" charelem="22" />
            <statadd Level="11" value="1" statlink="_PER-LEVEL-HPS" charelem="4" />
            <statadd Level="12" value="1" statlink="_PER-LEVEL-HPS" charelem="23" />
         </Stat>

         <Stat value="15" >
            <alias name="_LEVEL-ONE-HPS" />
            <statadd Level="1" value="15" charelem="24" />
         </Stat>

         <Stat value="12" >
            <alias name="Healing Surges" />
            <statadd type="Level 1" Level="1" requires="!NoConToHealingSurges" value="1" statlink="Constitution" abilmod="true" charelem="8" />
            <statadd type="Class" Level="1" value="9" charelem="24" />
            <statadd Level="12" value="1" charelem="25" />
         </Stat>

         <Stat value="6" >
            <alias name="HALF-LEVEL" />
            <statadd Level="2" value="1" charelem="14" />
            <statadd Level="4" value="1" charelem="16" />
            <statadd Level="6" value="1" charelem="18" />
            <statadd Level="8" value="1" charelem="20" />
            <statadd Level="10" value="1" charelem="22" />
            <statadd Level="12" value="1" charelem="23" />
         </Stat>

         <Stat value="2" >
            <alias name="Fortitude Defense Class Bonus" />
            <statadd Level="1" value="2" charelem="24" />
         </Stat>

         <Stat value="0" >
            <alias name="Reflex Defense Class Bonus" />
         </Stat>

         <Stat value="0" >
            <alias name="Will Defense Class Bonus" />
         </Stat>

         <Stat value="13" >
            <alias name="Initiative" />
            <statadd Level="1" value="1" statlink="HALF-LEVEL" charelem="8" />
            <statadd type="Ability" Level="1" value="1" statlink="Dexterity" abilmod="true" charelem="8" />
            <statadd Level="1" value="1" statlink="Initiative Misc" charelem="8" />
         </Stat>

         <Stat value="4" >
            <alias name="Initiative Misc" />
            <statadd type="Feat" Level="12" value="4" charelem="26" />
         </Stat>

         <Stat value="2" >
            <alias name="Ring Slots" />
            <statadd Level="1" value="2" charelem="8" />
         </Stat>

         <Stat value="1" >
            <alias name="_BaseActionPoints" />
            <statadd Level="1" value="1" charelem="8" />
         </Stat>

         <Stat value="39000" >
            <alias name="XP Needed" />
            <statadd Level="1" value="1000" charelem="8" />
            <statadd Level="2" value="1250" charelem="14" />
            <statadd Level="3" value="1500" charelem="15" />
            <statadd Level="4" value="1750" charelem="16" />
            <statadd Level="5" value="2000" charelem="17" />
            <statadd Level="6" value="2500" charelem="18" />
            <statadd Level="7" value="3000" charelem="19" />
            <statadd Level="8" value="3500" charelem="20" />
            <statadd Level="9" value="4000" charelem="21" />
            <statadd Level="10" value="5500" charelem="22" />
            <statadd Level="11" value="6000" charelem="4" />
            <statadd Level="12" value="7000" charelem="23" />
         </Stat>

         <Stat value="9" >
            <alias name="Acrobatics" />
            <statadd Level="1" value="1" statlink="HALF-LEVEL" charelem="27" />
            <statadd type="Ability" Level="1" value="1" statlink="Dexterity" abilmod="true" charelem="27" />
            <statadd Level="1" value="1" statlink="Acrobatics Trained" charelem="27" />
            <statadd Level="1" value="1" statlink="Acrobatics Misc" charelem="27" />
            <statadd type="Armor Penalty" Level="1" value="1" statlink="Armor Penalty" charelem="27" />
         </Stat>

         <Stat value="0" >
            <alias name="Acrobatics Trained" />
         </Stat>

         <Stat value="0" >
            <alias name="Acrobatics Misc" />
         </Stat>

         <Stat value="0" >
            <alias name="Armor Penalty" />
         </Stat>

         <Stat value="6" >
            <alias name="Arcana" />
            <statadd Level="1" value="1" statlink="HALF-LEVEL" charelem="27" />
            <statadd type="Ability" Level="1" value="1" statlink="Intelligence" abilmod="true" charelem="27" />
            <statadd Level="1" value="1" statlink="Arcana Trained" charelem="27" />
            <statadd Level="1" value="1" statlink="Arcana Misc" charelem="27" />
         </Stat>

         <Stat value="0" >
            <alias name="Arcana Trained" />
         </Stat>

         <Stat value="0" >
            <alias name="Arcana Misc" />
         </Stat>

         <Stat value="5" >
            <alias name="Bluff" />
            <statadd Level="1" value="1" statlink="HALF-LEVEL" charelem="27" />
            <statadd type="Ability" Level="1" value="1" statlink="Charisma" abilmod="true" charelem="27" />
            <statadd Level="1" value="1" statlink="Bluff Trained" charelem="27" />
            <statadd Level="1" value="1" statlink="Bluff Misc" charelem="27" />
         </Stat>

         <Stat value="0" >
            <alias name="Bluff Trained" />
         </Stat>

         <Stat value="0" >
            <alias name="Bluff Misc" />
         </Stat>

         <Stat value="5" >
            <alias name="Diplomacy" />
            <statadd Level="1" value="1" statlink="HALF-LEVEL" charelem="27" />
            <statadd type="Ability" Level="1" value="1" statlink="Charisma" abilmod="true" charelem="27" />
            <statadd Level="1" value="1" statlink="Diplomacy Trained" charelem="27" />
            <statadd Level="1" value="1" statlink="Diplomacy Misc" charelem="27" />
         </Stat>

         <Stat value="0" >
            <alias name="Diplomacy Trained" />
         </Stat>

         <Stat value="0" >
            <alias name="Diplomacy Misc" />
         </Stat>

         <Stat value="9" >
            <alias name="Dungeoneering" />
            <statadd Level="1" value="1" statlink="HALF-LEVEL" charelem="27" />
            <statadd type="Ability" Level="1" value="1" statlink="Wisdom" abilmod="true" charelem="27" />
            <statadd Level="1" value="1" statlink="Dungeoneering Trained" charelem="27" />
            <statadd Level="1" value="1" statlink="Dungeoneering Misc" charelem="27" />
         </Stat>

         <Stat value="0" >
            <alias name="Dungeoneering Trained" />
         </Stat>

         <Stat value="0" >
            <alias name="Dungeoneering Misc" />
         </Stat>

         <Stat value="15" >
            <alias name="Endurance" />
            <statadd Level="1" value="1" statlink="HALF-LEVEL" charelem="27" />
            <statadd type="Ability" Level="1" value="1" statlink="Constitution" abilmod="true" charelem="27" />
            <statadd Level="1" value="1" statlink="Endurance Trained" charelem="27" />
            <statadd Level="1" value="1" statlink="Endurance Misc" charelem="27" />
            <statadd type="Armor Penalty" Level="1" value="1" statlink="Armor Penalty" charelem="27" />
         </Stat>

         <Stat value="5" >
            <alias name="Endurance Trained" />
            <statadd type="trained" Level="1" value="5" charelem="28" />
         </Stat>

         <Stat value="2" >
            <alias name="Endurance Misc" />
            <statadd type="Racial" Level="1" value="2" charelem="29" />
         </Stat>

         <Stat value="14" >
            <alias name="Heal" />
            <statadd Level="1" value="1" statlink="HALF-LEVEL" charelem="27" />
            <statadd type="Ability" Level="1" value="1" statlink="Wisdom" abilmod="true" charelem="27" />
            <statadd Level="1" value="1" statlink="Heal Trained" charelem="27" />
            <statadd Level="1" value="1" statlink="Heal Misc" charelem="27" />
         </Stat>

         <Stat value="5" >
            <alias name="Heal Trained" />
            <statadd type="trained" Level="1" value="5" charelem="30" />
         </Stat>

         <Stat value="0" >
            <alias name="Heal Misc" />
         </Stat>

         <Stat value="6" >
            <alias name="History" />
            <statadd Level="1" value="1" statlink="HALF-LEVEL" charelem="27" />
            <statadd type="Ability" Level="1" value="1" statlink="Intelligence" abilmod="true" charelem="27" />
            <statadd Level="1" value="1" statlink="History Trained" charelem="27" />
            <statadd Level="1" value="1" statlink="History Misc" charelem="27" />
         </Stat>

         <Stat value="0" >
            <alias name="History Trained" />
         </Stat>

         <Stat value="0" >
            <alias name="History Misc" />
         </Stat>

         <Stat value="9" >
            <alias name="Insight" />
            <statadd Level="1" value="1" statlink="HALF-LEVEL" charelem="27" />
            <statadd type="Ability" Level="1" value="1" statlink="Wisdom" abilmod="true" charelem="27" />
            <statadd Level="1" value="1" statlink="Insight Trained" charelem="27" />
            <statadd Level="1" value="1" statlink="Insight Misc" charelem="27" />
         </Stat>

         <Stat value="0" >
            <alias name="Insight Trained" />
         </Stat>

         <Stat value="0" >
            <alias name="Insight Misc" />
         </Stat>

         <Stat value="7" >
            <alias name="Intimidate" />
            <statadd Level="1" value="1" statlink="HALF-LEVEL" charelem="27" />
            <statadd type="Ability" Level="1" value="1" statlink="Charisma" abilmod="true" charelem="27" />
            <statadd Level="1" value="1" statlink="Intimidate Trained" charelem="27" />
            <statadd Level="1" value="1" statlink="Intimidate Misc" charelem="27" />
         </Stat>

         <Stat value="0" >
            <alias name="Intimidate Trained" />
         </Stat>

         <Stat value="2" >
            <alias name="Intimidate Misc" />
            <statadd type="Feat" Level="10" value="2" charelem="31" />
         </Stat>

         <Stat value="9" >
            <alias name="Nature" />
            <statadd Level="1" value="1" statlink="HALF-LEVEL" charelem="27" />
            <statadd type="Ability" Level="1" value="1" statlink="Wisdom" abilmod="true" charelem="27" />
            <statadd Level="1" value="1" statlink="Nature Trained" charelem="27" />
            <statadd Level="1" value="1" statlink="Nature Misc" charelem="27" />
         </Stat>

         <Stat value="0" >
            <alias name="Nature Trained" />
         </Stat>

         <Stat value="0" >
            <alias name="Nature Misc" />
         </Stat>

         <Stat value="9" >
            <alias name="Perception" />
            <statadd Level="1" value="1" statlink="HALF-LEVEL" charelem="27" />
            <statadd type="Ability" Level="1" value="1" statlink="Wisdom" abilmod="true" charelem="27" />
            <statadd Level="1" value="1" statlink="Perception Trained" charelem="27" />
            <statadd Level="1" value="1" statlink="Perception Misc" charelem="27" />
         </Stat>

         <Stat value="0" >
            <alias name="Perception Trained" />
         </Stat>

         <Stat value="0" >
            <alias name="Perception Misc" />
         </Stat>

         <Stat value="6" >
            <alias name="Religion" />
            <statadd Level="1" value="1" statlink="HALF-LEVEL" charelem="27" />
            <statadd type="Ability" Level="1" value="1" statlink="Intelligence" abilmod="true" charelem="27" />
            <statadd Level="1" value="1" statlink="Religion Trained" charelem="27" />
            <statadd Level="1" value="1" statlink="Religion Misc" charelem="27" />
         </Stat>

         <Stat value="0" >
            <alias name="Religion Trained" />
         </Stat>

         <Stat value="0" >
            <alias name="Religion Misc" />
         </Stat>

         <Stat value="9" >
            <alias name="Stealth" />
            <statadd Level="1" value="1" statlink="HALF-LEVEL" charelem="27" />
            <statadd type="Ability" Level="1" value="1" statlink="Dexterity" abilmod="true" charelem="27" />
            <statadd Level="1" value="1" statlink="Stealth Trained" charelem="27" />
            <statadd Level="1" value="1" statlink="Stealth Misc" charelem="27" />
            <statadd type="Armor Penalty" Level="1" value="1" statlink="Armor Penalty" charelem="27" />
         </Stat>

         <Stat value="0" >
            <alias name="Stealth Trained" />
         </Stat>

         <Stat value="0" >
            <alias name="Stealth Misc" />
         </Stat>

         <Stat value="5" >
            <alias name="Streetwise" />
            <statadd Level="1" value="1" statlink="HALF-LEVEL" charelem="27" />
            <statadd type="Ability" Level="1" value="1" statlink="Charisma" abilmod="true" charelem="27" />
            <statadd Level="1" value="1" statlink="Streetwise Trained" charelem="27" />
            <statadd Level="1" value="1" statlink="Streetwise Misc" charelem="27" />
         </Stat>

         <Stat value="0" >
            <alias name="Streetwise Trained" />
         </Stat>

         <Stat value="0" >
            <alias name="Streetwise Misc" />
         </Stat>

         <Stat value="9" >
            <alias name="Thievery" />
            <statadd Level="1" value="1" statlink="HALF-LEVEL" charelem="27" />
            <statadd type="Ability" Level="1" value="1" statlink="Dexterity" abilmod="true" charelem="27" />
            <statadd Level="1" value="1" statlink="Thievery Trained" charelem="27" />
            <statadd Level="1" value="1" statlink="Thievery Misc" charelem="27" />
            <statadd type="Armor Penalty" Level="1" value="1" statlink="Armor Penalty" charelem="27" />
         </Stat>

         <Stat value="0" >
            <alias name="Thievery Trained" />
         </Stat>

         <Stat value="0" >
            <alias name="Thievery Misc" />
         </Stat>

         <Stat value="18" >
            <alias name="Athletics" />
            <statadd Level="1" value="1" statlink="HALF-LEVEL" charelem="27" />
            <statadd type="Ability" Level="1" value="1" statlink="Strength" abilmod="true" charelem="27" />
            <statadd Level="1" value="1" statlink="Athletics Trained" charelem="27" />
            <statadd Level="1" value="1" statlink="Athletics Misc" charelem="27" />
            <statadd type="Armor Penalty" Level="1" value="1" statlink="Armor Penalty" charelem="27" />
         </Stat>

         <Stat value="5" >
            <alias name="Athletics Trained" />
            <statadd type="trained" Level="1" value="5" charelem="32" />
         </Stat>

         <Stat value="2" >
            <alias name="Athletics Misc" />
            <statadd type="Racial" Level="1" value="2" charelem="33" />
         </Stat>

         <Stat value="19" >
            <alias name="Passive Perception" />
            <statadd Level="1" value="1" statlink="Perception" charelem="27" />
            <statadd Level="1" value="10" charelem="27" />
         </Stat>

         <Stat value="19" >
            <alias name="Passive Insight" />
            <statadd Level="1" value="1" statlink="Insight" charelem="27" />
            <statadd Level="1" value="10" charelem="27" />
         </Stat>

         <Stat value="3" >
            <alias name="resist:cold" />
            <statadd Level="1" value="2" charelem="34" />
            <statadd Level="1" requires="Paragon Tier" value="1" charelem="34" />
            <statadd Level="1" requires="Epic Tier" value="2" charelem="34" />
         </Stat>

         <Stat value="13" >
            <alias name="resist:fire" />
            <statadd Level="1" value="2" charelem="34" />
            <statadd Level="1" requires="Paragon Tier" value="1" charelem="34" />
            <statadd Level="1" requires="Epic Tier" value="2" charelem="34" />
            <statadd type="resist" Level="12" value="1" statlink="Cinder of Gazra (paragon tier)" charelem="35" />
         </Stat>

         <Stat value="3" >
            <alias name="resist:thunder" />
            <statadd Level="1" value="2" charelem="34" />
            <statadd Level="1" requires="Paragon Tier" value="1" charelem="34" />
            <statadd Level="1" requires="Epic Tier" value="2" charelem="34" />
         </Stat>

         <Stat value="5" >
            <alias name="Speed" />
            <statadd Level="1" value="6" charelem="36" />
            <statadd type="Armor" Level="12" value="-1" charelem="9" />
         </Stat>

         <Stat value="0" >
            <alias name="Average Height" />
            <statadd String="5&apos;7&quot;-6&apos;0&quot;" Level="1" value="0" />
         </Stat>

         <Stat value="0" >
            <alias name="Average Weight" />
            <statadd String="130-180 lb." Level="1" value="0" />
         </Stat>

         <Stat value="0" >
            <alias name="Size" />
            <statadd String="Medium" Level="1" value="0" />
         </Stat>

         <Stat value="2" >
            <alias name="Language Count" />
            <statadd Level="1" value="1" charelem="37" />
            <statadd Level="1" value="1" charelem="38" />
         </Stat>

         <Stat value="0" >
            <alias name="_CLASSNAME" />
            <statadd String="ID_FMP_CLASS_3" Level="1" value="0" />
         </Stat>

         <Stat value="6" >
            <alias name="_PER-LEVEL-HPS" />
            <statadd Level="1" value="6" charelem="24" />
         </Stat>

         <Stat value="0" >
            <alias name="attack rolls" />
            <statadd Level="1" conditional="on opportunity attacks" value="1" statlink="Combat Superiority" charelem="39" />
            <statadd type="item" Level="12" conditional="to bull rush attacks" value="2" charelem="40" />
            <statadd Level="12" requires="!Armor Proficiency (Scale)" value="-2" charelem="9" />
         </Stat>

         <Stat value="0" >
            <alias name="Combat Superiority" />
         </Stat>

         <Stat value="1" >
            <alias name="two-hands,weapon:attack" />
            <statadd Level="1" value="1" charelem="41" />
         </Stat>

         <Stat value="2" >
            <alias name="Spear Expertise" />
            <statadd Level="8" value="1" charelem="42" />
            <statadd Level="8" requires="Paragon Tier" value="1" charelem="42" />
            <statadd Level="8" requires="Epic Tier" value="1" charelem="42" />
         </Stat>

         <Stat value="2" >
            <alias name="weapon,spear group:attack" />
            <statadd type="Feat" Level="8" value="1" statlink="Spear Expertise" charelem="42" />
         </Stat>

         <Stat value="0" >
            <alias name="spear group,weapon:damage" />
            <statadd Level="8" conditional="when charging" value="1" statlink="Spear Expertise" charelem="42" />
         </Stat>

         <Stat value="2" >
            <alias name="Improved Defenses" />
            <statadd Level="11" value="1" charelem="11" />
            <statadd Level="11" requires="Paragon Tier" value="1" charelem="11" />
            <statadd Level="11" requires="Epic Tier" value="1" charelem="11" />
         </Stat>

         <Stat value="0" >
            <alias name="Action Point" />
            <statadd String="Lunging Action:You can spend an action point to increase the reach of your reach weapons by 1 square until the start of your next turn, instead of taking an extra action." Level="11" value="0" />
         </Stat>

         <Stat value="101" >
            <alias name="Weight" />
            <statadd value="99" />
            <statadd Level="12" value="1" charelem="43" />
            <statadd Level="12" value="1" charelem="44" />
         </Stat>

         <Stat value="1200" >
            <alias name="Weight Discount" />
            <statadd Level="12" value="200" charelem="43" />
            <statadd Level="12" value="1000" charelem="44" />
         </Stat>

         <Stat value="1" >
            <alias name="ID_FMP_ITEM_SET_21 Set Count" />
            <statadd type="Helm of Able Defense" Level="12" value="1" charelem="13" />
         </Stat>

         <Stat value="4" >
            <alias name="melee:damage" />
            <statadd type="item" Level="12" value="4" charelem="45" />
         </Stat>

         <Stat value="4" >
            <alias name="Armor Enhancement Bonus" />
            <statadd Level="12" value="4" charelem="10" />
         </Stat>

         <Stat value="1" >
            <alias name="ID_FMP_ITEM_SET_34 Set Count" />
            <statadd type="Stone of Earth" Level="12" value="1" charelem="46" />
         </Stat>

         <Stat value="0" >
            <alias name="damage rolls" />
            <statadd Level="12" conditional="against bloodied targets" value="4" charelem="47" />
         </Stat>

         <Stat value="10" >
            <alias name="Cinder of Gazra (paragon tier)" />
            <statadd Level="12" value="10" charelem="35" />
         </Stat>

      </StatBlock>

      <!--
         The list of all rules elements the character has, after taking into
         account retraining, multiclass power swapping, etc.
      -->
      <RulesElementTally>
         <RulesElement name="1" type="Level" internal-id="ID_INTERNAL_LEVEL_1" charelem="8" legality="rules-legal" >
            <specific name="XP Needed" > 1000 </specific>
         </RulesElement>
         <RulesElement name="Level1Rules" type="Level1Rules" internal-id="ID_INTERNAL_LEVEL1RULES_LEVEL1RULES" charelem="48" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="SkillRules" type="Level1Rules" internal-id="ID_INTERNAL_LEVEL1RULES_SKILLRULES" charelem="27" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Acrobatics" type="Skill" internal-id="ID_FMP_SKILL_1" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=1" charelem="49" legality="rules-legal" >
            <specific name="Key Ability" > Dexterity </specific>
         Creatures typically use the Acrobatics skill to maintain their balance while walking on narrow or unstable surfaces, to slip free of a grab or restraints, and to take less damage from a fall.
	Moving across a surface that is slippery doesn&apos;t usually require an Acrobatics check; that surface is instead treated as difficult terrain. If a surface is extremely slippery, the DM might require an Acrobatics check to cross it.
         </RulesElement>
         <RulesElement name="Arcana" type="Skill" internal-id="ID_FMP_SKILL_2" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=2" charelem="50" legality="rules-legal" >
            <specific name="Key Ability" > Intelligence </specific>
         The Arcana skill encompasses knowledge about magic-related lore and magical effects. Training in this skill represents academic study, either formalized or as a hobby. This knowledge can touch on any source of magical power—whether arcane, divine, primal, or another one—and extends to information about the following planes of existence, including the creatures native to those planes: the Elemental Chaos, the Feywild, and the Shadowfell. Those that have training in Arcana also have a chance to know something about the mysterious Far Realm, but not about its creatures (such knowledge falls under the Dungeoneering skill). A creature can sometimes use its knowledge of magic to interact with or manipulate magical phenomena.
         </RulesElement>
         <RulesElement name="Bluff" type="Skill" internal-id="ID_FMP_SKILL_3" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=3" charelem="51" legality="rules-legal" >
            <specific name="Key Ability" > Charisma </specific>
         Characters use the Bluff skill to make what&apos;s false seem true, what&apos;s outrageous seem plausible, and what&apos;s suspicious seem ordinary. A character makes a Bluff check to fast-talk a guard, con a merchant, gamble, pass off a disguise, fake a piece of documentation, or mislead in some other way.
         </RulesElement>
         <RulesElement name="Diplomacy" type="Skill" internal-id="ID_FMP_SKILL_6" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=6" charelem="52" legality="rules-legal" >
            <specific name="Key Ability" > Charisma </specific>
         Creatures use the Diplomacy skill to influence others using tact, subtlety, and social grace. (Monsters rarely make Diplomacy checks.) Make a  diplomacy check to change opinions, inspire good will, haggle with a merchant, demonstrate proper etiquette and decorum, or negotiate a deal in good faith.
         </RulesElement>
         <RulesElement name="Dungeoneering" type="Skill" internal-id="ID_FMP_SKILL_7" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=7" charelem="53" legality="rules-legal" >
            <specific name="Key Ability" > Wisdom </specific>
         The Dungeoneering skill represents knowledge and skills related to dungeon exploration, including finding one&apos;s way through underground complexes, navigating winding caverns, recognizing subterranean hazards, and foraging for food in the Underdark.
	Training in this skill represents formalized study or extensive experience. Those that have training in the skill can also identify creatures of the Far Realm.
         </RulesElement>
         <RulesElement name="Endurance" type="Skill" internal-id="ID_FMP_SKILL_8" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=8" charelem="54" legality="rules-legal" >
            <specific name="Key Ability" > Constitution </specific>
         The Endurance skill is used to stave off ill effects and to push beyond normal physical limits. A creature that has training in Endurance can hold its breath for long periods of time, forestall the debilitating effects of hunger and thirst, and swim or tread water for extended periods. Some hazards—including extreme temperatures, violent weather, and diseases—require creatures to make Endurance checks to resist or delay debilitating effects.
	Characters rarely use Endurance actively; the DM directs players to use it in response to certain hazards. Using the skill in that way requires no action, unless otherwise noted. See “Environmental Dangers” and “Disease” for some of the situations that require Endurance checks.
         </RulesElement>
         <RulesElement name="Heal" type="Skill" internal-id="ID_FMP_SKILL_9" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=9" charelem="55" legality="rules-legal" >
            <specific name="Key Ability" > Wisdom </specific>
         The Heal skill is used to help others recover from wounds or debilitating conditions, including disease.
         </RulesElement>
         <RulesElement name="History" type="Skill" internal-id="ID_FMP_SKILL_11" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=11" charelem="56" legality="rules-legal" >
            <specific name="Key Ability" > Intelligence </specific>
         The History skill encompasses knowledge related to the history of a region and beyond, including the chronological record of significant events and an explanation of their causes. This knowledge includes information pertaining to royalty and other leaders, wars, legends, important personalities, laws, customs, traditions, and memorable events.
	Training in this skill represents academic study, either formalized or as a hobby. Those that have training in the skill are likely to know esoteric historical information.
	Make a History check to remember a relevant piece of historical lore or to recognize a historical clue (see “Knowledge Checks”).
         </RulesElement>
         <RulesElement name="Insight" type="Skill" internal-id="ID_FMP_SKILL_13" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=13" charelem="57" legality="rules-legal" >
            <specific name="Key Ability" > Wisdom </specific>
         The Insight skill is used to discern intent and decipher body language during social interactions. Characters use the skill to comprehend motives, to read between the lines, to get a sense of moods and attitudes, and to determine how truthful someone is being. (Monsters rarely use Insight.)
	Insight is used to oppose Bluff checks and as the social counterpart to the Perception skill. The skill can also be used to gain clues, to figure out how well a social situation is going, and to determine if someone is under the influence of an outside force.
	When a creature uses Insight, it is making a best guess about another creature&apos;s motives and truthfulness. Insight is not an exact science or a supernatural power; it represents the ability to get a sense of how a person is behaving.
         </RulesElement>
         <RulesElement name="Intimidate" type="Skill" internal-id="ID_FMP_SKILL_14" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=14" charelem="58" legality="rules-legal" >
            <specific name="Key Ability" > Charisma </specific>
         An adventurer can make an Intimidate check to influence others through hostile actions, overt threats, or deadly persuasion. (Monsters can&apos;t intimidate adventurers.)
         </RulesElement>
         <RulesElement name="Nature" type="Skill" internal-id="ID_FMP_SKILL_16" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=16" charelem="59" legality="rules-legal" >
            <specific name="Key Ability" > Wisdom </specific>
         The Nature skill encompasses knowledge and skills related to nature, including finding ways through wilderness, recognizing natural hazards, dealing with and identifying natural creatures, and living off the land. 
	Training in this skill represents formalized study or extensive experience. Those that have training in the skill are likely to know esoteric information in the field of study.
         </RulesElement>
         <RulesElement name="Perception" type="Skill" internal-id="ID_FMP_SKILL_17" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=17" charelem="60" legality="rules-legal" >
            <specific name="Key Ability" > Wisdom </specific>
         The Perception skill encompasses perceiving things, most often by sight or sound. Make a Perception check to notice a clue, detect a secret door, find a trap, follow tracks, listen for sounds behind a closed door, or locate a hidden object.
	In most situations, the DM uses passive Perception to determine if a creature notices things. A creature that has fallen asleep naturally (as opposed to being knocked unconscious by a power or other effect) is unconscious, but not totally deprived of awareness; it can use its passive Perception to hear things, but with a -5 penalty.
         </RulesElement>
         <RulesElement name="Religion" type="Skill" internal-id="ID_FMP_SKILL_18" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=18" charelem="61" legality="rules-legal" >
            <specific name="Key Ability" > Intelligence </specific>
         The Religion skill encompasses knowledge about gods, sacred writings, religious ceremonies, holy symbols, and theology. This knowledge extends to information about the undead and about the Astral Sea, including the creatures of that plane.
	Training in this skill represents academic study, either formalized or as a hobby. Those that have training in the skill are likely to know esoteric information in the field of study.
         </RulesElement>
         <RulesElement name="Stealth" type="Skill" internal-id="ID_FMP_SKILL_20" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=20" charelem="62" legality="rules-legal" >
            <specific name="Key Ability" > Dexterity </specific>
         Creatures use the Stealth skill to conceal themselves from enemies, slink past guards, slip away without being noticed, and sneak up on others without being detected.
         </RulesElement>
         <RulesElement name="Streetwise" type="Skill" internal-id="ID_FMP_SKILL_21" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=21" charelem="63" legality="rules-legal" >
            <specific name="Key Ability" > Charisma </specific>
         The Streetwise skill encompasses knowledge of the ins and outs of life in a settlement (a village, a town, or a city), whether on its main streets or in its back alleys. This knowledge is gleaned from talking to people and observing them as they go about their lives, rather than from studying tomes or maps. A character who has training in this skill is especially adept at getting information out of people living in settlements.
	When in a settlement, make a Streetwise check to find out what&apos;s going on, who the movers and shakers are, where to get the best deals, and where the dangers are.
         </RulesElement>
         <RulesElement name="Thievery" type="Skill" internal-id="ID_FMP_SKILL_23" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=23" charelem="64" legality="rules-legal" >
            <specific name="Key Ability" > Dexterity </specific>
         The Thievery skill encompasses various abilities that require nerves of steel and a steady hand: disabling traps, opening locks, picking pockets, and sleight of hand.
	The DM might decide that some uses of this skill are so specialized that a creature is required to have training in Thievery to have a chance of succeeding.
         </RulesElement>
         <RulesElement name="Athletics" type="Skill" internal-id="ID_FMP_SKILL_27" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=27" charelem="65" legality="rules-legal" >
            <specific name="Key Ability" > Strength </specific>
         Make an Athletics check to attempt physical activities that rely on muscular strength, including climbing, escaping from a grab, jumping, and swimming.
         </RulesElement>
         <RulesElement name="Heroic" type="Tier" internal-id="ID_INTERNAL_TIER_HEROIC" charelem="66" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Melee Basic Attack" type="Power" internal-id="ID_INTERNAL_POWER_MELEE_BASIC_ATTACK" charelem="67" legality="rules-legal" >
            <specific name="Flavor" > You resort to the simple attack you learned when you first picked up a melee weapon. </specific>
            <specific name="Power Usage" > At-Will </specific>
            <specific name="Display" > Basic Attack </specific>
            <specific name="Keywords" > Weapon </specific>
            <specific name="Action Type" > Standard Action </specific>
            <specific name="Attack Type" > Melee weapon </specific>
            <specific name="Target" > One creature </specific>
            <specific name="Attack" > Strength vs. AC </specific>
            <specific name="Hit" > 1[W] + Strength modifier damage. </specific>
            <specific name="	Level 21" > 2[W] + Strength modifier damage. </specific>
         </RulesElement>
         <RulesElement name="Ranged Basic Attack" type="Power" internal-id="ID_INTERNAL_POWER_RANGED_BASIC_ATTACK" charelem="68" legality="rules-legal" >
            <specific name="Flavor" > You resort to the simple attack you learned when you first picked up a ranged weapon. </specific>
            <specific name="Power Usage" > At-Will </specific>
            <specific name="Display" > Basic Attack </specific>
            <specific name="Keywords" > Weapon </specific>
            <specific name="Action Type" > Standard Action </specific>
            <specific name="Attack Type" > Ranged weapon </specific>
            <specific name="Target" > One creature </specific>
            <specific name="Attack" > Dexterity vs. AC </specific>
            <specific name="Hit" > 1[W] + Dexterity modifier damage. </specific>
            <specific name="	Level 21" > 2[W] + Dexterity modifier damage. </specific>
         </RulesElement>
         <RulesElement name="DetailsRules" type="Level1Rules" internal-id="ID_INTERNAL_LEVEL1RULES_DETAILSRULES" charelem="69" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="male" type="Gender" internal-id="ID_INTERNAL_GENDER_MALE" charelem="70" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Unaligned" type="Alignment" internal-id="ID_FMP_ALIGNMENT_1" charelem="71" legality="rules-legal" >
         Unaligned creatures don&apos;t actively seek to harm others or wish them ill. But such creatures also don&apos;t go out of their way to put themselves at risk without some hope for reward. They support law and order when doing so benefits them. They value their own freedom, without worrying too much about protecting the freedom of others.
	A few unaligned people, and most unaligned deities, aren&apos;t undecided about alignment. Rather, they&apos;ve chosen not to choose, either because they see the benefits of both good and evil or because they see themselves as above the concerns of morality. The Raven Queen and her devotees fall into the latter camp, believing that moral choices are irrelevant to their mission, since death comes to all creatures regardless of alignment.
         </RulesElement>
         <RulesElement name="Expansion1" type="Level1Rules" internal-id="ID_INTERNAL_LEVEL1RULES_EXPANSION1" charelem="72" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Akanûl" type="Background" internal-id="ID_FMP_BACKGROUND_3" charelem="73" legality="rules-legal" >
            <specific name="Type" > Campaign </specific>
            <specific name="Common Knowledge" > Genasi of Returned Abeir crafted a nation out of the severe geography left in the Spellplague&apos;s wake. Many of Faerûn&apos;s widely dispersed genasi flocked to Akanûl after its formation, but genasi of Abeiran descent make up most of the nation&apos;s populace. </specific>
            <specific name="Benefit" > You gain resist 2 cold, resist 2 fire, and resist 2 thunder (or your existing resistance to these damage types increases by 2).
	At 11th level, these values improve to resist 3 (or increase by 3), and at 21st level, they improve to resist 5 (or increase by 5). </specific>
            <specific name="Short Description" > Akanûl is a land defined by extreme geography, eldritch beasts, and genasi. A new nation formed in the devastated and warped lands between Chessenta and Chondath, Akanûl has overcome great adversity and is now a name to be respected and feared. </specific>
            <specific name="Campaign" > Forgotten Realms </specific>
         </RulesElement>
         <RulesElement name="Background Benefit" type="Internal" internal-id="ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT" charelem="74" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Akanûl Benefit" type="Background Choice" internal-id="ID_INTERNAL_BACKGROUND_CHOICE_AKANûL_BENEFIT" charelem="34" legality="rules-legal" >
            <specific name="_SupportsID" > ID_FMP_BACKGROUND_3 </specific>
            <specific name="_IsBenefit" > 1 </specific>
         You gain resist 2 cold, resist 2 fire, and resist 2 thunder (or your existing resistance to these damage types increases by 2).
	At 11th level, these values improve to resist 3 (or increase by 3), and at 21st level, they improve to resist 5 (or increase by 5).
         </RulesElement>
         <RulesElement name="Expansion2" type="Level1Rules" internal-id="ID_INTERNAL_LEVEL1RULES_EXPANSION2" charelem="75" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Expansion3" type="Level1Rules" internal-id="ID_INTERNAL_LEVEL1RULES_EXPANSION3" charelem="76" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Expansion4" type="Level1Rules" internal-id="ID_INTERNAL_LEVEL1RULES_EXPANSION4" charelem="77" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Expansion5" type="Level1Rules" internal-id="ID_INTERNAL_LEVEL1RULES_EXPANSION5" charelem="78" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Longtooth Shifter" type="Race" internal-id="ID_FMP_RACE_27" url="http://www.wizards.com/dndinsider/compendium/race.aspx?id=27" charelem="36" legality="rules-legal" >
            <specific name="Flavor" > Ferocious heirs of the wild, the perfect fusion of civilized race and wild beast </specific>
            <specific name="Size" > Medium </specific>
            <specific name="Speed" > 6 squares </specific>
            <specific name="Characteristics" > Active, alert, fierce, freespirited, intuitive, perceptive, predatory, self-reliant, unrestrained, wild </specific>
            <specific name="Physical Qualities" > In broad strokes, shifters resemble humans with animalistic features. Their bodies are lithe and strong, and they often move in a crouched posture, springing and leaping along the ground. Their faces have a bestial cast, with wide, flat noses, large eyes and heavy eyebrows, pointed ears, and long sideburns. The hair of their heads is thick and worn long. Shifter skin and hair are usually some shade of brown.
Longtooth shifters claim werewolves as ancestors and have a vaguely canine cast to their features that becomes much more pronounced when they use their longtooth shifting power. Razorclaw shifters are descended from weretigers and are more catlike, particularly when using razorclaw shifting.
Shifters live about as long as humans. </specific>
            <specific name="Playing" > Shifters are strongly influenced by their animal natures. They think and act like predators, conceiving of most activities in terms of hunting and prey. Longtooth shifters are drawn to a pack of companions, whether that&apos;s a family group or an adventuring party. They work well as part of a team in combat, coordinating their attacks with their allies and coming to the aid of beleaguered friends. They&apos;re drawn to the leader and defender roles, and they make excellent clerics, fighters, paladins, and wardens.
Razorclaw shifters are more independent, self-reliant, and adaptable. They&apos;re no less devoted to their adventuring companions, but they trust their allies to take care of themselves, and they strive to carry their own weight in the group. They&apos;re more inclined to be strikers or controllers, and they favor classes such as avenger, druid, ranger, and rogue.
Historically, most shifters dwelled in nomadic bands in plains and forests far removed from cities and towns. Since the fall of Nerath, however, the increasing dangers of the wilds have driven many shifters into closer proximity to human and elf communities. Some shifters have adapted smoothly to this change, carving niches for themselves as trappers, hunters, fishers, trackers, guides, or military scouts. Others have a much harder time fitting in. Shifters who feel alienated from the plains and forests they love sometimes take up the adventuring life as a way of escaping the confines of city walls and returning to nature. Some shifters, though, turn to a life of crime, preying on the residents of their new homes like the hunters they are. </specific>
            <specific name="Vision" > Low-light </specific>
            <specific name="Average Height" > 5&apos;7&quot;-6&apos;0&quot; </specific>
            <specific name="Average Weight" > 130-180 lb. </specific>
            <specific name="Ability Scores" > +2 Strength, +2 Wisdom </specific>
            <specific name="Languages" > Common, choice of one other </specific>
            <specific name="Skill Bonuses" > +2 Athletics, +2 Endurance </specific>
            <specific name="Short Description" > Shifters carry the blood of lycanthropes, and can shift to unleash their savage natures. </specific>
            <specific name="Male Names" > Ash, Brook, Claw, Cliff, Flint, Frost, River, Rock, Storm, Thorn, Tor </specific>
            <specific name="Female Names" > Aurora, Autumn, Dawn, Hazel, Iris, Lily, Rain, Rose, Summer </specific>
            <specific name="Racial Traits" > ID_FMP_RACIAL_TRAIT_429 </specific>
         Shifters are fierce hunters strongly influenced by their animal nature. Though they can&apos;t fully change shape as their lycanthrope ancestors can, shifters do become more bestial during the heat of battle, calling on the primal power of the beast within.

Play a Longtooth Shifter if you want ...
•	to tap into bestial strength or speed in battle.
•	to be a character in tune with your primal savage nature.
•	to be a member of a race that favors the druid, fighter, ranger, and warden classes.
         </RulesElement>
         <RulesElement name="Longtooth Shifter" type="Grants" internal-id="ID_INTERNAL_GRANTS_LONGTOOTH_SHIFTER" charelem="79" legality="rules-legal" >
            <specific name="_SupportsID" > ID_FMP_RACE_27 </specific>
         </RulesElement>
         <RulesElement name="Medium" type="Size" internal-id="ID_INTERNAL_SIZE_MEDIUM" charelem="80" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Low-light" type="Vision" internal-id="ID_INTERNAL_VISION_LOW-LIGHT" charelem="81" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Longtooth Shifting" type="Racial Trait" internal-id="ID_FMP_RACIAL_TRAIT_429" charelem="82" legality="rules-legal" >
            <specific name="Short Description" > Use longtooth shifting as an encounter power </specific>
            <specific name="Level" > 1 </specific>
            <specific name="Powers" > ID_FMP_POWER_2483 </specific>
            <specific name="Type" > Encounter </specific>
            <specific name="Class" > ID_FMP_RACE_27 </specific>
            <specific name="_DisplayPowers" > ID_FMP_POWER_2483 </specific>
         You have the longtooth shifting power.
         </RulesElement>
         <RulesElement name="Longtooth Shifting" type="Power" internal-id="ID_FMP_POWER_2483" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=2483" charelem="83" legality="rules-legal" >
            <specific name="Flavor" > You unleash the beast within and take on a savage countenance. </specific>
            <specific name="Power Usage" > Encounter </specific>
            <specific name="Display" > Longtooth Shifter Racial Power </specific>
            <specific name="Keywords" > Healing </specific>
            <specific name="Action Type" > Minor Action </specific>
            <specific name="Attack Type" > Personal </specific>
            <specific name="Requirement" > You must be bloodied. </specific>
            <specific name="Effect" > Until the end of the encounter, you gain a +2 bonus to damage rolls. In addition, while you are bloodied, you gain regeneration 2.
Level 11: Regeneration 4.
Level 21: Regeneration 6. </specific>
            <specific name="_ParentFeature" > ID_FMP_RACIAL_TRAIT_429 </specific>
            <specific name="Class" > ID_FMP_RACE_27 </specific>
         </RulesElement>
         <RulesElement name="Strength" type="Race Ability Bonus" internal-id="ID_INTERNAL_RACE_ABILITY_BONUS_STRENGTH" charelem="1" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Wisdom" type="Race Ability Bonus" internal-id="ID_INTERNAL_RACE_ABILITY_BONUS_WISDOM" charelem="7" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Common" type="Language" internal-id="ID_FMP_LANGUAGE_1" charelem="37" legality="rules-legal" >
         Common is a debased form of Supernal, in the way that humans and halflings heard the first language.
         </RulesElement>
         <RulesElement name="Athletics Bonus" type="Racial Trait" internal-id="ID_INTERNAL_RACIAL_TRAIT_ATHLETICS_BONUS" charelem="33" legality="rules-legal" >
            <specific name="_CS_ShortDescription" > @ </specific>
         Gain a +2 racial bonus to Athletics.
         </RulesElement>
         <RulesElement name="Endurance Bonus" type="Racial Trait" internal-id="ID_INTERNAL_RACIAL_TRAIT_ENDURANCE_BONUS" charelem="29" legality="rules-legal" >
            <specific name="_CS_ShortDescription" > @ </specific>
         Gain a +2 racial bonus to Endurance.
         </RulesElement>
         <RulesElement name="Goblin" type="Language" internal-id="ID_FMP_LANGUAGE_20" charelem="38" legality="rules-legal" >
         Goblin is a debased form of Supernal, in the way that goblins heard the first language. Goblin is the only foundational language of the world that lacks its own script, owing to the brutal and barbaric nature of the goblin race.
         </RulesElement>
         <RulesElement name="Fighter" type="Class" internal-id="ID_FMP_CLASS_3" url="http://www.wizards.com/dndinsider/compendium/class.aspx?id=3" charelem="24" legality="rules-legal" >
            <specific name="Key Abilities" > Strength; Dexterity, Wisdom, or Constitution </specific>
            <specific name="Armor Proficiencies" > Cloth, leather, hide, chainmail, scale; heavy shields, light shields </specific>
            <specific name="Weapon Proficiencies" > Simple melee, military melee, simple ranged, military ranged </specific>
            <specific name="Bonus to Defense" > +2 Fortitude </specific>
            <specific name="Hit Points at 1st Level" > 15+ Constitution Score </specific>
            <specific name="Hit Points per Level Gained" > 6 </specific>
            <specific name="Healing Surges" > 9+ Constitution Modifier </specific>
            <specific name="Trained Skills" > From the class skills list below, choose 3 trained skills at 1st level. </specific>
            <specific name="Class Skills" > Athletics (Str), Endurance (Con), Heal (Wis), Intimidate (Cha), Streetwise (Cha) </specific>
            <specific name="Build Options" > Arena Fighter, Battlerager Fighter, Brawling Fighter, Great Weapon Fighter, Guardian Fighter, Tempest Fighter </specific>
            <specific name="_PARSED_CLASS_FEATURE" > Combat Agility, Combat Challenge, Combat Superiority, Fighter Talents </specific>
            <specific name="Role" > Defender. Tough and resilient, you use tactical cunning and battle prowess to contain the enemy and protect your allies. </specific>
            <specific name="Power Source" > Martial. </specific>
            <specific name="Power Name" > Exploits </specific>
            <specific name="_RoleElement" > ID_FMP_ROLE_4 </specific>
            <specific name="_PowerSourceElement" > ID_FMP_POWER_SOURCE_1 </specific>
            <specific name="Short Description" > You define the front line of combat, crushing foes in melee while protecting your allies. </specific>
            <specific name="_DisplayName" > Fighter (Weaponmaster) </specific>
         Into the blackest pits beneath the mountains, bent on vengeance and glory, goes the weaponmaster. These warriors form the iron core of any legion. They crash into the teeth of enemy forces, armed with cold steel and grim purpose. They are the mercenaries loitering in taverns between expeditions, the guards who cast a watchful eye over their charges, the weapon masters who elevate fighting styles to lethal arts. The weaponmaster is a fearless warrior, ready to meet any challenge.
	Weaponmasters can be found just about anywhere and among any sort of people. A few are gallant warriors fighting for noble causes, while others are calculating mercenaries who draw their weapons only when the pay is right. All weaponmasters, however, are adventurers, ready to face any challenge, to go where glory, plunder, or honor leads them.
	Specialized combat maneuvers, or exploits, combined with a dedicated focus on a fighting style set weaponmasters apart from other fighters. A weaponmaster can slam his or her weapon through one enemy to crunch into another or carve a bloody path through enemies in a whirlwind of destruction. Weapons are crucial too, since weaponmasters know how to coax every advantage they can from their tools, and those who use axes fight differently from those who favor heavy blades.
	Compared to a knight or a slayer, a weaponmaster focuses on a broader variety of tactics and combat styles. While a knight or a slayer has fairly predictable, though still formidable, abilities, each weaponmaster cultivates a unique blend of specific maneuvers and abilities.
	Weaponmasters develop their combat prowess in many different ways. Most have some elementary training to expose them to different weapons and armor. These trainees are often squires, militia, students, and soldiers. Once they&apos;re cut free, they grow their ability through practice and observation. Each battle proves instructive, giving the weaponmaster new insights that might develop into full-blown techniques.
         </RulesElement>
         <RulesElement name="Fighter" type="Grants" internal-id="ID_INTERNAL_GRANTS_FIGHTER" charelem="84" legality="rules-legal" >
            <specific name="_SupportsID" > ID_FMP_CLASS_3 </specific>
         </RulesElement>
         <RulesElement name="Defender" type="Role" internal-id="ID_FMP_ROLE_4" charelem="85" legality="rules-legal" >
         Defenders have the highest defenses in the game and good close-up offense. They are the party&apos;s front-line combatants; wherever they&apos;re standing, that&apos;s where the action is. Defenders have abilities and powers that make it difficult for enemies to move past them or ignore them in battle.
         </RulesElement>
         <RulesElement name="Martial" type="Power Source" internal-id="ID_FMP_POWER_SOURCE_1" charelem="86" legality="rules-legal" >
         Martial powers are not magic in the traditional sense, although some martial powers stand well beyond the capabilities of ordinary mortals. Martial characters use their own strength and willpower to vanquish their enemies. Training and dedication replace arcane formulas and prayers to grant fighters, rangers, rogues, and warlords, among others, their power. Martial powers are called exploits.
         </RulesElement>
         <RulesElement name="Armor Proficiency (Cloth)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)" charelem="87" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Armor Proficiency (Leather)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)" charelem="88" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Armor Proficiency (Hide)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)" charelem="89" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Armor Proficiency (Chainmail)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)" charelem="90" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Armor Proficiency (Scale)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(SCALE)" charelem="91" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Shield Proficiency (Heavy)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(HEAVY)" charelem="92" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Shield Proficiency (Light)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)" charelem="93" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Simple Melee" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE" charelem="94" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Club)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLUB)" charelem="95" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Dagger)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DAGGER)" charelem="96" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Javelin)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(JAVELIN)" charelem="97" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Mace)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MACE)" charelem="98" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Sickle)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SICKLE)" charelem="99" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Spear)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SPEAR)" charelem="100" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Greatclub)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATCLUB)" charelem="101" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Morningstar)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MORNINGSTAR)" charelem="102" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Quarterstaff)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(QUARTERSTAFF)" charelem="103" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Scythe)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCYTHE)" charelem="104" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Spiked gauntlet)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SPIKED_GAUNTLET)" charelem="105" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Talid)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TALID)" charelem="106" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Widow&apos;s knife)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WIDOW&apos;S_KNIFE)" charelem="107" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Wrist razors)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WRIST_RAZORS)" charelem="108" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Light mace)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LIGHT_MACE)" charelem="109" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Short spear)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHORT_SPEAR)" charelem="110" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Claw Fighter Claw)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLAW_FIGHTER_CLAW)" charelem="111" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Shadowblade)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHADOWBLADE)" charelem="112" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Climbing Claw)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLIMBING_CLAW)" charelem="113" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Dragontooth Shield (Heroic Tier))" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DRAGONTOOTH_SHIELD_(HEROIC_TIER))" charelem="114" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Fighting Shield (Heroic Tier))" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FIGHTING_SHIELD_(HEROIC_TIER))" charelem="115" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Soul Shield (Paragon Tier))" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SOUL_SHIELD_(PARAGON_TIER))" charelem="116" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Sun Shield (Paragon Tier))" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SUN_SHIELD_(PARAGON_TIER))" charelem="117" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Rod of Seven Parts (Weapon))" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(ROD_OF_SEVEN_PARTS_(WEAPON))" charelem="118" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Military Melee" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_MILITARY_MELEE" charelem="119" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Battleaxe)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BATTLEAXE)" charelem="120" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Handaxe)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HANDAXE)" charelem="121" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Flail)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FLAIL)" charelem="122" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Throwing hammer)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(THROWING_HAMMER)" charelem="123" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Warhammer)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WARHAMMER)" charelem="124" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (War Pick)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WAR_PICK)" charelem="125" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Scimitar)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCIMITAR)" charelem="126" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Longsword)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGSWORD)" charelem="127" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Short sword)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHORT_SWORD)" charelem="128" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Greataxe)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATAXE)" charelem="129" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Heavy flail)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HEAVY_FLAIL)" charelem="130" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Glaive)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GLAIVE)" charelem="131" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Halberd)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HALBERD)" charelem="132" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Maul)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MAUL)" charelem="133" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Longspear)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGSPEAR)" charelem="134" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Greatsword)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATSWORD)" charelem="135" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Rapier)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(RAPIER)" charelem="136" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Falchion)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FALCHION)" charelem="137" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Broadsword)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BROADSWORD)" charelem="138" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Khopesh)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(KHOPESH)" charelem="139" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Light war pick)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LIGHT_WAR_PICK)" charelem="140" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Scourge)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCOURGE)" charelem="141" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Trident)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TRIDENT)" charelem="142" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Heavy war pick)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HEAVY_WAR_PICK)" charelem="143" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Alhulak)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(ALHULAK)" charelem="144" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Carrikal)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CARRIKAL)" charelem="145" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Trikal)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TRIKAL)" charelem="146" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Blade of Winter&apos;s Mourning)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BLADE_OF_WINTER&apos;S_MOURNING)" charelem="147" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Blade of Annihilation)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BLADE_OF_ANNIHILATION)" charelem="148" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Starshadow Blade)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(STARSHADOW_BLADE)" charelem="149" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Sword of the White Well)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SWORD_OF_THE_WHITE_WELL)" charelem="150" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Scourge of Exquisite Agony)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCOURGE_OF_EXQUISITE_AGONY)" charelem="151" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Lance)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LANCE)" charelem="152" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Pike)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(PIKE)" charelem="153" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Blade of Chaos)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BLADE_OF_CHAOS)" charelem="154" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Feral Armor Claw)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FERAL_ARMOR_CLAW)" charelem="155" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Simple Ranged" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED" charelem="156" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Hand crossbow)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HAND_CROSSBOW)" charelem="157" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Sling)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SLING)" charelem="158" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Crossbow)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CROSSBOW)" charelem="159" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Repeating crossbow)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(REPEATING_CROSSBOW)" charelem="160" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Dejada)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DEJADA)" charelem="161" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Military Ranged" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_MILITARY_RANGED" charelem="162" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Shortbow)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHORTBOW)" charelem="163" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Longbow)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGBOW)" charelem="164" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Chatkcha)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CHATKCHA)" charelem="165" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Combat Challenge" type="Class Feature" internal-id="ID_FMP_CLASS_FEATURE_54" charelem="166" legality="rules-legal" >
            <specific name="Flavor" > You are a weaponmaster, a warrior who commands the battlefield through prowess and unwavering resolve. Each attack demonstrates your talent and the danger you pose if an enemy ignores you. Whenever an enemy tries to disengage or attack someone else, your swift strike demonstrates why doing that was a terrible mistake. </specific>
            <specific name="Short Description" > Mark foes you attack. They get -2 to attacks not including you. Make basic melee attack against adjacent marked foe who shifts or makes attack not including you. Mark lasts until end of your next turn or marked by other. </specific>
            <specific name="Level" > 1 </specific>
            <specific name="Powers" > ID_FMP_POWER_7419 </specific>
            <specific name="Type" > At-Will </specific>
            <specific name="Class" > ID_FMP_CLASS_3 </specific>
            <specific name="_DisplayPowers" > ID_FMP_POWER_7419 </specific>
         In combat, it&apos;s dangerous to ignore a fighter. Every time you attack an enemy, whether the attack hits or misses, you can choose to mark that target. The mark lasts until the end of your next turn. While a target is marked, it takes a -2 penalty to attack rolls if its attack doesn&apos;t include you as a target. A creature can be subject to only one mark at a time. A new mark supersedes a mark that was already in place.
In addition, you gain the Combat Challenge power.
         </RulesElement>
         <RulesElement name="Combat Challenge" type="Power" internal-id="ID_FMP_POWER_7419" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=7419" charelem="167" legality="rules-legal" >
            <specific name="Power Usage" > At-Will </specific>
            <specific name="Display" > Fighter Attack </specific>
            <specific name="Keywords" > Martial, Weapon </specific>
            <specific name="Action Type" > Immediate Interrupt </specific>
            <specific name="Attack Type" > Melee </specific>
            <specific name="Effect" > Whenever an enemy marked by you is adjacent to you and shifts or makes an attack that does not include you as a target, you can make a melee basic attack against that enemy. </specific>
            <specific name="Class" > ID_FMP_CLASS_3 </specific>
            <specific name="Level" />
            <specific name="Power Type" > Attack </specific>
            <specific name="_ParentFeature" > ID_FMP_CLASS_FEATURE_54,ID_FMP_CLASS_FEATURE_1528 </specific>
         </RulesElement>
         <RulesElement name="Combat Superiority" type="Class Feature" internal-id="ID_FMP_CLASS_FEATURE_401" charelem="39" legality="rules-legal" >
            <specific name="Flavor" > You have highly developed combat instincts, born from experience in battle and excellence at arms. You can take any opening your opponent gives you, striking with speed and precision. Those struck realize their error and turn to face you, almost without fail. </specific>
            <specific name="Short Description" > Add + [Wis mod] to opportunity attack rolls. Hit ends foe&apos;s movement (if any) this action. </specific>
            <specific name="Level" > 1 </specific>
         You gain a bonus to the attack rolls of opportunity attacks. The bonus equals your Wisdom modifier.
	An enemy hit by your opportunity attack stops moving, if a move provoked the attack. If the enemy still has actions remaining, it can use them to resume moving.
         </RulesElement>
         <RulesElement name="Fighter Talents" type="Class Feature" internal-id="ID_FMP_CLASS_FEATURE_1064" charelem="168" legality="rules-legal" >
            <specific name="Flavor" > All fighters are adept with weapons, from blades to hammers, axes to spears, and everything in between. You focus your training on your preferred combat technique. You might favor the defensive benefits from weapons and shield, or you might opt for the raw power of a two-handed weapon. </specific>
            <specific name="Short Description" > You gain a fighter talent </specific>
            <specific name="Level" > 1 </specific>
            <specific name="_PARSED_SUB_FEATURES" > ID_FMP_CLASS_FEATURE_1028, ID_FMP_CLASS_FEATURE_1029, ID_FMP_CLASS_FEATURE_1062, ID_FMP_CLASS_FEATURE_1063, ID_FMP_CLASS_FEATURE_2182, ID_FMP_CLASS_FEATURE_2893 </specific>
         Choose one of the following fighter talents.
         </RulesElement>
         <RulesElement name="Two-handed Weapon Talent" type="Class Feature" internal-id="ID_FMP_CLASS_FEATURE_1063" charelem="41" legality="rules-legal" >
            <specific name="Short Description" > +1 on weapon attacks with two-handed weapons. </specific>
            <specific name="Level" > 1 </specific>
         When using a two-handed weapon, you gain a +1 bonus to weapon attack rolls.
         </RulesElement>
         <RulesElement name="Fighter Implements" type="Grants" internal-id="ID_INTERNAL_GRANTS_FIGHTER_IMPLEMENTS" charelem="169" legality="rules-legal" >
            <specific name="_SupportsID" > ID_FMP_CLASS_3 </specific>
         </RulesElement>
         <RulesElement name="Cleave" type="Power" internal-id="ID_FMP_POWER_992" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=992" charelem="170" legality="rules-legal" >
            <specific name="Flavor" > You hit one enemy, then cleave into another. </specific>
            <specific name="Power Usage" > At-Will </specific>
            <specific name="Display" > Fighter Attack 1 </specific>
            <specific name="Keywords" > Martial, Weapon </specific>
            <specific name="Action Type" > Standard Action </specific>
            <specific name="Attack Type" > Melee weapon </specific>
            <specific name="Targets" > One creature </specific>
            <specific name="Attack" > Strength vs. AC </specific>
            <specific name="Hit" > 1[W] + Strength modifier damage, and an enemy adjacent to you other than the target takes damage equal to your Strength modifier.
	Level 21: 2[W] + Strength modifier damage. </specific>
            <specific name="Class" > ID_FMP_CLASS_3 </specific>
            <specific name="Level" > 1 </specific>
            <specific name="Power Type" > Attack </specific>
            <specific name="_Associated Feats" > ID_FMP_FEAT_977, ID_FMP_FEAT_987, ID_FMP_FEAT_993, ID_FMP_FEAT_2356, ID_FMP_FEAT_2714, ID_FMP_FEAT_3188 </specific>
         When faced with great numbers, such as when you&apos;re fighting goblins, kobolds, and other lesser creatures, it&apos;s often best to sweep them aside with your mighty strikes. Cleave lets you bash through one enemy and sink your weapon into another.
         </RulesElement>
         <RulesElement name="Athletics" type="Skill Training" internal-id="ID_INTERNAL_SKILL_TRAINING_ATHLETICS" charelem="32" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Endurance" type="Skill Training" internal-id="ID_INTERNAL_SKILL_TRAINING_ENDURANCE" charelem="28" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Heal" type="Skill Training" internal-id="ID_INTERNAL_SKILL_TRAINING_HEAL" charelem="30" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Greatspear)" type="Feat" internal-id="ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(GREATSPEAR)" charelem="171" legality="rules-legal" >
            <specific name="_SupportsID" > ID_FMP_FEAT_178 </specific>
            <specific name="_RequiresID" > ID_FMP_WEAPON_64 </specific>
            <specific name="Short Description" > Gain proficiency with the Greatspear. </specific>
            <specific name="Tier" > Heroic </specific>
         You gain proficiency with the Greatspear.
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Greatspear)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATSPEAR)" charelem="172" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Hack and Hew" type="Power" internal-id="ID_FMP_POWER_10474" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=10474" charelem="173" legality="rules-legal" >
            <specific name="Flavor" > You hack an enemy with one stroke and then slash at another with your next swing. </specific>
            <specific name="Power Usage" > Encounter </specific>
            <specific name="Display" > Fighter Attack 1 </specific>
            <specific name="Keywords" > Invigorating, Martial, Weapon </specific>
            <specific name="Action Type" > Standard Action </specific>
            <specific name="Attack Type" > Melee weapon </specific>
            <specific name="Primary Target" > One creature </specific>
            <specific name="Primary Attack" > Strength vs. AC </specific>
            <specific name="Hit" > 1[W] + Strength modifier damage. </specific>
            <specific name="Effect" > Make a secondary attack. </specific>
            <specific name="	Secondary Target" > One creature other than the primary target </specific>
            <specific name="	Secondary Attack" > Strength vs. AC </specific>
            <specific name="	Hit" > 1[W] + Strength modifier damage. </specific>
            <specific name="Class" > ID_FMP_CLASS_3 </specific>
            <specific name="Level" > 1 </specific>
            <specific name="Power Type" > Attack </specific>
         </RulesElement>
         <RulesElement name="Tempest Dance" type="Power" internal-id="ID_FMP_POWER_4316" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=4316" charelem="174" legality="rules-legal" >
            <specific name="Flavor" > You lunge from enemy to enemy, giving each a taste of your weapon as you pass. </specific>
            <specific name="Power Usage" > Daily </specific>
            <specific name="Display" > Fighter Attack 1 </specific>
            <specific name="Keywords" > Martial, Weapon </specific>
            <specific name="Action Type" > Standard Action </specific>
            <specific name="Attack Type" > Melee weapon </specific>
            <specific name="Target" > One creature </specific>
            <specific name="Attack" > Strength vs. AC </specific>
            <specific name="Hit" > 1[W] + Strength modifier damage. If you have combat advantage against the target, the attack deals extra damage equal to your Dexterity modifier. </specific>
            <specific name="Effect" > You can shift 1 square and repeat the attack against a second target. You can then shift 1 square and repeat the attack against a third target. </specific>
            <specific name="Class" > ID_FMP_CLASS_3 </specific>
            <specific name="Level" > 1 </specific>
            <specific name="Power Type" > Attack </specific>
         </RulesElement>
         <RulesElement name="Malar" type="Deity" internal-id="ID_FMP_DEITY_73" charelem="175" legality="rules-legal" >
            <specific name="Alignment" > Evil </specific>
            <specific name="_Tags" > Neverwinter </specific>
         Malar is a primordial, savage deity who revels in the hunt and the blood of the kill. Appearing as a sleek and supple catlike beast with blood-spattered ebony fur, Malar delights in instilling fear in his victims, for he can literally smell and taste the essences of their terror.
         </RulesElement>
         <RulesElement name="2" type="Level" internal-id="ID_INTERNAL_LEVEL_2" charelem="14" legality="rules-legal" >
            <specific name="XP Needed" > 1250 </specific>
         </RulesElement>
         <RulesElement name="Pass Forward" type="Power" internal-id="ID_FMP_POWER_2116" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=2116" charelem="176" legality="rules-legal" >
            <specific name="Flavor" > With perfect timing, you slip by your foe without dropping your guard. </specific>
            <specific name="Power Usage" > At-Will </specific>
            <specific name="Display" > Fighter Utility 2 </specific>
            <specific name="Keywords" > Martial </specific>
            <specific name="Action Type" > Move Action </specific>
            <specific name="Attack Type" > Personal </specific>
            <specific name="Effect" > You pick an adjacent enemy and move up to your speed. As long as you end this movement in a square adjacent to that enemy, your movement does not provoke opportunity attacks from that enemy. </specific>
            <specific name="Class" > ID_FMP_CLASS_3 </specific>
            <specific name="Level" > 2 </specific>
            <specific name="Power Type" > Utility </specific>
         </RulesElement>
         <RulesElement name="3" type="Level" internal-id="ID_INTERNAL_LEVEL_3" charelem="15" legality="rules-legal" >
            <specific name="XP Needed" > 1500 </specific>
         </RulesElement>
         <RulesElement name="4" type="Level" internal-id="ID_INTERNAL_LEVEL_4" charelem="16" legality="rules-legal" >
            <specific name="XP Needed" > 1750 </specific>
         </RulesElement>
         <RulesElement name="Forceful Opportunist" type="Feat" internal-id="ID_FMP_FEAT_1971" url="http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1971" charelem="177" legality="rules-legal" >
            <specific name="Tier" > Heroic </specific>
            <specific name="Short Description" > Push with opportunity attack </specific>
         Whenever you hit a target with an opportunity attack, you can push the target 1 square and shift into the square the target vacated.
         </RulesElement>
         <RulesElement name="Dexterity" type="Ability Increase (Level 4)" internal-id="ID_INTERNAL_ABILITY_INCREASE_(LEVEL_4)_DEXTERITY" charelem="5" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Strength" type="Ability Increase (Level 4)" internal-id="ID_INTERNAL_ABILITY_INCREASE_(LEVEL_4)_STRENGTH" charelem="2" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Rain of Blows" type="Power" internal-id="ID_FMP_POWER_268" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=268" charelem="178" replaces="179" legality="rules-legal" >
            <specific name="Flavor" > You become a blur of motion, raining a series of blows upon your opponent. </specific>
            <specific name="Power Usage" > Encounter </specific>
            <specific name="Display" > Fighter Attack 3 </specific>
            <specific name="Keywords" > Martial, Weapon </specific>
            <specific name="Action Type" > Standard Action </specific>
            <specific name="Attack Type" > Melee weapon </specific>
            <specific name="Target" > One creature </specific>
            <specific name="Attack" > Strength vs. AC. Make the attack twice against the target. </specific>
            <specific name="Hit" > 1[W] damage. </specific>
            <specific name="Weapon" > If you&apos;re wielding a flail, a light blade, or a spear and have Dexterity 15 or higher, make the attack a third time against either the target or a different creature. </specific>
            <specific name="Class" > ID_FMP_CLASS_3 </specific>
            <specific name="Level" > 3 </specific>
            <specific name="Power Type" > Attack </specific>
         You know when to press forward and when to pull back. Rain of blows makes use of quick strikes, giving you more opportunities to hit the enemy. If you&apos;re wielding a faster weapon, such as a light blade or a spear, and you are quick enough, you can follow up with another attack against the same enemy or a different one.
         </RulesElement>
         <RulesElement name="5" type="Level" internal-id="ID_INTERNAL_LEVEL_5" charelem="17" legality="rules-legal" >
            <specific name="XP Needed" > 2000 </specific>
         </RulesElement>
         <RulesElement name="Rain of Steel" type="Power" internal-id="ID_FMP_POWER_1436" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=1436" charelem="180" legality="rules-legal" >
            <specific name="Flavor" > You constantly swing your weapon about, slashing and cutting into nearby enemies. </specific>
            <specific name="Power Usage" > Daily </specific>
            <specific name="Display" > Fighter Attack 5 </specific>
            <specific name="Keywords" > Martial, Stance, Weapon </specific>
            <specific name="Action Type" > Minor Action </specific>
            <specific name="Attack Type" > Personal </specific>
            <specific name="Effect" > You assume the rain of steel stance. Until the stance ends, any enemy that starts its turn adjacent to you takes 1[W] damage, but only if you&apos;re able to make opportunity attacks. </specific>
            <specific name="Class" > ID_FMP_CLASS_3 </specific>
            <specific name="Level" > 5 </specific>
            <specific name="Power Type" > Attack </specific>
         When you drop into the rain of steel stance, you and your weapon become one. Instinct guides your attacks, sending your weapon slamming into any creature that dares approach you. So long as you retain your wits, you can carve a path through the enemy.
         </RulesElement>
         <RulesElement name="6" type="Level" internal-id="ID_INTERNAL_LEVEL_6" charelem="18" legality="rules-legal" >
            <specific name="XP Needed" > 2500 </specific>
         </RulesElement>
         <RulesElement name="Polearm Momentum" type="Feat" internal-id="ID_FMP_FEAT_806" url="http://www.wizards.com/dndinsider/compendium/feat.aspx?id=806" charelem="181" legality="rules-legal" >
            <specific name="Tier" > Heroic </specific>
            <specific name="Short Description" > Knock pushed or slid enemy prone with polearm </specific>
         Whenever you use a polearm or a spear attack to push or slide a target 2 or more squares, you can also knock that target prone at the end of the forced movement.
         </RulesElement>
         <RulesElement name="Kirre&apos;s Roar" type="Power" internal-id="ID_FMP_POWER_12850" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=12850" charelem="182" legality="rules-legal" >
            <specific name="Flavor" > You let out an explosive roar, diverting your enemies&apos; attentions to you. The call steels you against the imminent assault. </specific>
            <specific name="Power Usage" > Encounter </specific>
            <specific name="Display" > Fighter Utility 6 </specific>
            <specific name="Keywords" > Martial </specific>
            <specific name="Action Type" > Minor Action </specific>
            <specific name="Attack Type" > Close burst 3 </specific>
            <specific name="Target" > Each enemy in the burst </specific>
            <specific name="Effect" > You mark each target until the end of your next turn. In addition, you gain resistance to all damage equal to your Dexterity modifier until the end of your next turn. </specific>
            <specific name="Class" > ID_FMP_CLASS_3 </specific>
            <specific name="Level" > 6 </specific>
            <specific name="Power Type" > Utility </specific>
         </RulesElement>
         <RulesElement name="7" type="Level" internal-id="ID_INTERNAL_LEVEL_7" charelem="19" legality="rules-legal" >
            <specific name="XP Needed" > 3000 </specific>
         </RulesElement>
         <RulesElement name="Come and Get It" type="Power" internal-id="ID_FMP_POWER_2177" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=2177" charelem="183" legality="rules-legal" >
            <specific name="Flavor" > You brandish your weapon and call out to your foes, luring them close through their overconfidence, and then deliver a spinning strike against them all. </specific>
            <specific name="Power Usage" > Encounter </specific>
            <specific name="Display" > Fighter Attack 7 </specific>
            <specific name="Keywords" > Martial, Weapon </specific>
            <specific name="Action Type" > Standard Action </specific>
            <specific name="Attack Type" > Close burst 3 </specific>
            <specific name="Target" > Each enemy you can see in the burst </specific>
            <specific name="Attack" > Strength vs. Will </specific>
            <specific name="Hit" > You pull the target up to 2 squares, but only if it can end the pull adjacent to you. If the target is adjacent to you after the pull, it takes 1[W] damage. </specific>
            <specific name="Class" > ID_FMP_CLASS_3 </specific>
            <specific name="Level" > 7 </specific>
            <specific name="Power Type" > Attack </specific>
         You have learned how to lure your enemies to face you. You might use an improbable boast or a filthy insult. Maybe it&apos;s just a gesture. No matter what technique you use, enemies subject to come and get it rush forward. This proves their undoing, for you greet them with a decisive strike. Be mindful of how much damage you can take before using this power. Draw too many enemies, and you might find yourself overwhelmed.
         </RulesElement>
         <RulesElement name="8" type="Level" internal-id="ID_INTERNAL_LEVEL_8" charelem="20" legality="rules-legal" >
            <specific name="XP Needed" > 3500 </specific>
         </RulesElement>
         <RulesElement name="Spear Expertise" type="Feat" internal-id="ID_FMP_FEAT_3150" url="http://www.wizards.com/dndinsider/compendium/feat.aspx?id=3150" charelem="42" legality="rules-legal" >
            <specific name="Flavor" > Your talent with the spear is deadliest when you are advancing upon a foe. </specific>
            <specific name="Short Description" > When using a spear: +1/2/3 (by tier) to attack rolls, damage rolls made following a charge </specific>
            <specific name="_Tags" > Essentials </specific>
            <specific name="Tier" > Heroic </specific>
         You gain a +1 feat bonus to weapon attack rolls that you make with a spear. When charging, you also gain a +1 bonus to damage rolls of weapon attacks that you make with a spear. Both of these bonuses increase to +2 at 11th level and +3 at 21st level.
         </RulesElement>
         <RulesElement name="Strength" type="Ability Increase (Level 8)" internal-id="ID_INTERNAL_ABILITY_INCREASE_(LEVEL_8)_STRENGTH" charelem="3" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Dexterity" type="Ability Increase (Level 8)" internal-id="ID_INTERNAL_ABILITY_INCREASE_(LEVEL_8)_DEXTERITY" charelem="6" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="9" type="Level" internal-id="ID_INTERNAL_LEVEL_9" charelem="21" legality="rules-legal" >
            <specific name="XP Needed" > 4000 </specific>
         </RulesElement>
         <RulesElement name="Shift the Battlefield" type="Power" internal-id="ID_FMP_POWER_1437" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=1437" charelem="184" legality="rules-legal" >
            <specific name="Flavor" > With supreme skill and great resolve, you maneuver your enemies where you want them. </specific>
            <specific name="Power Usage" > Daily </specific>
            <specific name="Display" > Fighter Attack 9 </specific>
            <specific name="Keywords" > Martial, Weapon </specific>
            <specific name="Action Type" > Standard Action </specific>
            <specific name="Attack Type" > Close burst 1 </specific>
            <specific name="Targets" > Each enemy you can see in the burst </specific>
            <specific name="Attack" > Strength vs. AC </specific>
            <specific name="Hit" > 2[W] + Strength modifier damage, and you can slide the target 1 square. </specific>
            <specific name="Miss" > Half damage. </specific>
            <specific name="Class" > ID_FMP_CLASS_3 </specific>
            <specific name="Level" > 9 </specific>
            <specific name="Power Type" > Attack </specific>
         Such is your presence on the battlefield that you might find enemies swarming you time and time again. If you face overwhelming numbers, you can use shift the battlefield to give yourself and your allies the room to maneuver. A series of vicious strikes drives back your foes.
         </RulesElement>
         <RulesElement name="10" type="Level" internal-id="ID_INTERNAL_LEVEL_10" charelem="22" legality="rules-legal" >
            <specific name="XP Needed" > 5500 </specific>
         </RulesElement>
         <RulesElement name="Longhand Student" type="Feat" internal-id="ID_FMP_FEAT_2356" url="http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2356" charelem="31" legality="rules-legal" >
            <specific name="Tier" > Heroic </specific>
            <specific name="Type" > Lesser Style </specific>
            <specific name="Associated Power Info" > When you hit an enemy with a power associated with this feat, you can push that enemy 1 square. </specific>
            <specific name="Associated Powers" > Cleave, Viper&apos;s Strike </specific>
         You gain a +2 feat bonus to Intimidate checks.
If you are attacking with a two-handed polearm or a two-handed spear and you have proficiency with that weapon, you also gain the following benefit.
         </RulesElement>
         <RulesElement name="Clearheaded" type="Power" internal-id="ID_FMP_POWER_12702" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=12702" charelem="185" legality="rules-legal" >
            <specific name="Flavor" > Your mental resilience and training let you shake off an effect that hinders you. </specific>
            <specific name="Power Usage" > Encounter </specific>
            <specific name="Display" > Fighter Utility 10 </specific>
            <specific name="Keywords" > Martial </specific>
            <specific name="Action Type" > No Action </specific>
            <specific name="Attack Type" > Personal </specific>
            <specific name="Prerequisite" > You must have training in Endurance. </specific>
            <specific name="Trigger" > You start your turn dazed, dominated, or stunned by an effect that a save can end. </specific>
            <specific name="Effect" > You make a saving throw with a +5 power bonus against the triggering effect. </specific>
            <specific name="Class" > ID_FMP_CLASS_3 </specific>
            <specific name="Level" > 10 </specific>
            <specific name="Power Type" > Utility </specific>
            <specific name="_Tags" > Essentials </specific>
            <specific name="_ParentFeature" > ID_FMP_CLASS_FEATURE_3018 </specific>
            <specific name="_Subclasses" > ID_FMP_CLASS_716 </specific>
         Your focus on offense leaves your mind clear of other distractions. When you suffer the effects of magic or a particularly potent blow, you instantly summon up the inner strength to get you back in the fight. Even if you fail the saving throw granted by this power, you still get your normal saving throw at the end of your turn, doubling your chance to shake off a debilitating effect.
         </RulesElement>
         <RulesElement name="Weapon Master&apos;s Strike" type="Power" internal-id="ID_FMP_POWER_10332" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=10332" charelem="186" replaces="187" legality="rules-legal" >
            <specific name="Flavor" > You shift your tactics to match your weapon&apos;s strengths, maximizing its advantages to gain an edge against your foe. </specific>
            <specific name="Power Usage" > At-Will </specific>
            <specific name="Display" > Fighter Attack 1 </specific>
            <specific name="Keywords" > Martial, Weapon </specific>
            <specific name="Action Type" > Standard Action </specific>
            <specific name="Attack Type" > Melee weapon </specific>
            <specific name="Target" > One creature </specific>
            <specific name="Effect" > Before making this attack, you may sheathe a weapon and draw a different one as a free action. </specific>
            <specific name="Attack" > Strength vs. AC </specific>
            <specific name="Hit" > 1[W] + Strength modifier damage. In addition, the target takes an additional effect based on the weapon you wield. </specific>
            <specific name="	Axe" > The target takes extra damage equal to your Constitution modifier. </specific>
            <specific name="	Mace" > You slide the target 1 square. </specific>
            <specific name="	Heavy Blade" > Until the end of your next turn, you gain a +1 power bonus to AC against the target&apos;s attacks. </specific>
            <specific name="	Spear or Polearm" > Until the end of your next turn, the target provokes opportunity attacks from you when it shifts. </specific>
            <specific name="Class" > ID_FMP_CLASS_3 </specific>
            <specific name="Level" > 1 </specific>
            <specific name="Power Type" > Attack </specific>
         </RulesElement>
         <RulesElement name="11" type="Level" internal-id="ID_INTERNAL_LEVEL_11" charelem="4" legality="rules-legal" >
            <specific name="XP Needed" > 6000 </specific>
         </RulesElement>
         <RulesElement name="Paragon" type="Tier" internal-id="ID_INTERNAL_TIER_PARAGON" charelem="188" legality="rules-legal" >
         </RulesElement>
         <RulesElement name="Polearm Gamble" type="Feat" internal-id="ID_FMP_FEAT_258" url="http://www.wizards.com/dndinsider/compendium/feat.aspx?id=258" charelem="189" legality="rules-legal" >
            <specific name="Tier" > Paragon </specific>
            <specific name="Short Description" > Make opportunity attack against adjacent enemy </specific>
            <specific name="Special" > Weapon feat </specific>
         When a nonadjacent enemy enters a square adjacent to you, you can make an opportunity attack with a polearm against that enemy, but you grant combat advantage to that enemy until the end of the enemy&apos;s turn.
         </RulesElement>
         <RulesElement name="Polearm Master" type="Paragon Path" internal-id="ID_FMP_PARAGON_PATH_166" url="http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=166" charelem="190" legality="rules-legal" >
            <specific name="Flavor" > “Victory is easier to achieve when your reach is longer.” </specific>
            <specific name="Power Name" > Exploits </specific>
            <specific name="Class Features" > ID_FMP_CLASS_FEATURE_904, ID_FMP_CLASS_FEATURE_905, ID_FMP_CLASS_FEATURE_906 </specific>
            <specific name="Powers" > ID_FMP_POWER_4672,ID_FMP_POWER_4673,ID_FMP_POWER_4674 </specific>
            <specific name="_DisplayPowers" > ID_FMP_POWER_4672,ID_FMP_POWER_4673,ID_FMP_POWER_4674 </specific>
         The versatile polearm is easier to manufacture than a sword, and often easier to use effectively. In its simplest form, the polearm is a longspear—a short blade on the end of a long shaft. Since reach is an advantage, even the humble longspear is an effective weapon in unpracticed hands. In the hands of a master, its deadliness can be unparalleled.
	More complex polearms offer even greater rewards on the battlefield and off. They combine the best aspects of spear and blade or axe, allowing the user control and damage unmatched by other weapons. It&apos;s little wonder that whole units of soldiers use polearms in war, and that city watches use these weapons to protect citizens, as well as keep them in line. Because polearms are so common and easily crafted, learning to use one is part of most basic military instruction. Advanced skill isn&apos;t so easy to obtain, but the trials of regular combat serve as well as, if not better than, the training ground. The ability to use a polearm against a variety of foes can seldom be learned through the rigors of soldierly education.
	Through your adventures, you have mastered the polearm. You prefer a weapon that extends your options and your reach, understanding that it&apos;s better to keep monsters at a distance. With such a weapon at your disposal, you not only deal wounding blows to your adversaries and cut wide arcs through multiple foes, you also better protect your allies by commanding more of your surroundings.
         </RulesElement>
         <RulesElement name="Improved Defenses" type="Feat" internal-id="ID_FMP_FEAT_3143" url="http://www.wizards.com/dndinsider/compendium/feat.aspx?id=3143" charelem="11" replaces="191" legality="rules-legal" >
            <specific name="Flavor" > You hone your body and mind to guard against a variety of attacks. </specific>
            <specific name="Short Description" > +1/2/3 bonus (by tier) to Fortitude, Reflex, and Will. </specific>
            <specific name="_Tags" > Essentials </specific>
            <specific name="Tier" > Heroic </specific>
         You gain a +1 feat bonus to Fortitude, Reflex, and Will. This bonus increases to +2 at 11th level and +3 at 21st level.
         </RulesElement>
         <RulesElement name="Leveraging Strike" type="Power" internal-id="ID_FMP_POWER_4672" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=4672" charelem="192" legality="rules-legal" >
            <specific name="Flavor" > You use your weapon to move your target where you want. </specific>
            <specific name="Power Usage" > Encounter </specific>
            <specific name="Display" > Polearm Master Attack 11 </specific>
            <specific name="Keywords" > Martial, Weapon </specific>
            <specific name="Action Type" > Standard Action </specific>
            <specific name="Attack Type" > Melee weapon </specific>
            <specific name="Requirement" > You must be wielding a two-handed reach weapon. </specific>
            <specific name="Target" > One creature </specific>
            <specific name="Attack" > Strength vs. AC </specific>
            <specific name="Hit" > 2[W] + Strength modifier damage, and you slide the target a number of squares equal to your Wisdom modifier. </specific>
            <specific name="Miss" > Half damage, and no slide. </specific>
            <specific name="Class" > ID_FMP_PARAGON_PATH_166 </specific>
            <specific name="Level" > 11 </specific>
            <specific name="Power Type" > Attack </specific>
         </RulesElement>
         <RulesElement name="Forceful Reach" type="Class Feature" internal-id="ID_FMP_CLASS_FEATURE_905" charelem="193" legality="rules-legal" >
            <specific name="Short Description" > With reach weapon, move foe +1 square with weapon power that pushes, pulls, or slides </specific>
            <specific name="Level" > 11 </specific>
         If you use a reach weapon to deliver a weapon power that pushes, pulls, or slides a target, you increase the distance of the forced movement by 1 square.
         </RulesElement>
         <RulesElement name="Lunging Action" type="Class Feature" internal-id="ID_FMP_CLASS_FEATURE_904" charelem="194" legality="rules-legal" >
            <specific name="Short Description" > Can spend action point to increase reach of reach weapons by 1 until start of your next turn </specific>
            <specific name="Level" > 11 </specific>
         You can spend an action point to increase the reach of your reach weapons by 1 square until the start of your next turn, instead of taking an extra action.
         </RulesElement>
         <RulesElement name="12" type="Level" internal-id="ID_INTERNAL_LEVEL_12" charelem="23" legality="rules-legal" >
            <specific name="XP Needed" > 7000 </specific>
         </RulesElement>
         <RulesElement name="Improved Initiative" type="Feat" internal-id="ID_FMP_FEAT_272" url="http://www.wizards.com/dndinsider/compendium/feat.aspx?id=272" charelem="26" legality="rules-legal" >
            <specific name="Flavor" > You might be slow or clumsy, but when swords are drawn, your reflexes kick in. Through practice, awareness, and agility, you tend to strike first in battle. </specific>
            <specific name="Short Description" > +4 to initiative checks </specific>
            <specific name="_Tags" > Essentials </specific>
            <specific name="Tier" > Heroic </specific>
         You gain a +4 feat bonus to initiative.
         </RulesElement>
         <RulesElement name="Reaching Stance" type="Power" internal-id="ID_FMP_POWER_4673" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=4673" charelem="195" legality="rules-legal" >
            <specific name="Flavor" > You take a wide stance that allows you to lunge at careless foes. </specific>
            <specific name="Power Usage" > Daily </specific>
            <specific name="Display" > Polearm Master Utility 12 </specific>
            <specific name="Keywords" > Martial, Stance, Weapon </specific>
            <specific name="Action Type" > Minor Action </specific>
            <specific name="Attack Type" > Personal </specific>
            <specific name="Requirement" > You must be wielding a two-handed reach weapon. </specific>
            <specific name="Effect" > Until the stance ends, you can make opportunity attacks against enemies within your weapon&apos;s reach. </specific>
            <specific name="Class" > ID_FMP_PARAGON_PATH_166 </specific>
            <specific name="Level" > 12 </specific>
            <specific name="Power Type" > Utility </specific>
         </RulesElement>
         <RulesElement name="Elemental" type="Origin" internal-id="ID_INTERNAL_ORIGIN_ELEMENTAL" charelem="196" legality="rules-legal" >
         </RulesElement>
      </RulesElementTally>


      <!--
         The tally of the character&apos;s loot
      -->
      <LootTally>
         <loot count="0" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Greatspear" type="Weapon" internal-id="ID_FMP_WEAPON_64" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=64&amp;ftype=3" charelem="197" legality="rules-legal" >
               <specific name="Full Text" > Greatspear
Superior two-handed melee weapon
Cost: 25 gp
Damage: 1d10
Proficient: +3
Range: -
Weight: 8 lb.

This reach weapon resembles a longspear, but its broad head and strong haft allow it to strike with increased force.

Properties: 
Reach (With a reach weapon, you can attack enemies that are 2 squares away from you as well as adjacent enemies, with no attack penalty. You can still make opportunity attacks only against adjacent enemies. Likewise, you can flank only an adjacent enemy.).

Group: 
Polearm (Polearms are weapons mounted at the end of long hafts. All polearms also fall into another category of weapon, usually axe, heavy blade, or spear. Polearms are reach weapons.).
Spear (Consisting of a stabbing head on the end of a long shaft, a spear is great for lunging attacks.). </specific>
               <specific name="Weight" > 8 </specific>
               <specific name="Gold" > 25 </specific>
               <specific name="Range" />
               <specific name="Damage" > 1d10 </specific>
               <specific name="Proficiency Bonus" > 3 </specific>
               <specific name="Weapon Category" > Superior Melee </specific>
               <specific name="Hands Required" > Two-Handed </specific>
               <specific name="Item Slot" > Two-Hands </specific>
               <specific name="Group" > Polearm, Spear </specific>
               <specific name="Properties" > Reach </specific>
            This reach weapon resembles a longspear, but its broad head and strong haft allow it to strike with increased force.
            </RulesElement>
         </loot>
         <loot count="0" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Scale Armor" type="Armor" internal-id="ID_FMP_ARMOR_5" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=5&amp;ftype=2" charelem="198" legality="rules-legal" >
               <specific name="Full Text" > Scale Armor
Description: Overlapping pieces of highly durable material, such as steel or even dragon scales, make up scale armor. Despite its heaviness, scale is surprisingly easy to wear; its straps and buckles make it adjustable and able to fit snugly on the body, allowing for flexibility and agility.
	Magic appears at higher item levels, and grants higher armor bonuses than its mundane counterparts. Scale armor grants +8 AC at levels 6-10, +9 AC at levels 11-15, +10 AC at levels 16-20, +11 AC at levels 21-25, and +13 AC at levels 26-30.
AC Bonus: +7
Speed: -1
Weight: 45 lb.
Cost: 45 gp.
Type: Scale </specific>
               <specific name="Weight" > 45 </specific>
               <specific name="Armor Bonus" > 7 </specific>
               <specific name="Check" > - </specific>
               <specific name="Speed" > -1 </specific>
               <specific name="Gold" > 45 </specific>
               <specific name="_BaseACPlus1" > 7 </specific>
               <specific name="_BaseACPlus2" > 8 </specific>
               <specific name="_BaseACPlus3" > 9 </specific>
               <specific name="_BaseACPlus4" > 10 </specific>
               <specific name="_BaseACPlus5" > 11 </specific>
               <specific name="_BaseACPlus6" > 13 </specific>
               <specific name="Armor Type" > Heavy </specific>
               <specific name="Item Slot" > Body </specific>
               <specific name="Armor Category" > Scale </specific>
            Overlapping pieces of highly durable material, such as steel or even dragon scales, make up scale armor. Despite its heaviness, scale is surprisingly easy to wear; its straps and buckles make it adjustable and able to fit snugly on the body, allowing for flexibility and agility.
	Magic appears at higher item levels, and grants higher armor bonuses than its mundane counterparts. Scale armor grants +8 AC at levels 6-10, +9 AC at levels 11-15, +10 AC at levels 16-20, +11 AC at levels 21-25, and +13 AC at levels 26-30.
            </RulesElement>
         </loot>
         <loot count="1" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Adventurer&apos;s Kit" type="Gear" internal-id="ID_FMP_GEAR_1" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1&amp;ftype=4" charelem="199" legality="rules-legal" >
               <specific name="Full Text" > Adventurer&apos;s Kit
Category: Gear
Price: 15 gp 
Weight: 33 lb
Description: This kit includes a backpack, a bedroll, flint and steel, a belt pouch, two sunrods, ten days&apos; worth of trail rations, 50 feet of hempen rope, and a waterskin. </specific>
               <specific name="Weight" > 33 </specific>
               <specific name="Gold" > 15 </specific>
               <specific name="Category" > Gear </specific>
               <specific name="count" > 1 </specific>
            This kit includes a backpack, a bedroll, flint and steel, a belt pouch, two sunrods, ten days&apos; worth of trail rations, 50 feet of hempen rope, and a waterskin.
            </RulesElement>
         </loot>
         <loot count="0" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Scale Armor" type="Armor" internal-id="ID_FMP_ARMOR_5" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=5&amp;ftype=2" charelem="200" legality="rules-legal" >
               <specific name="Full Text" > Scale Armor
Description: Overlapping pieces of highly durable material, such as steel or even dragon scales, make up scale armor. Despite its heaviness, scale is surprisingly easy to wear; its straps and buckles make it adjustable and able to fit snugly on the body, allowing for flexibility and agility.
	Magic appears at higher item levels, and grants higher armor bonuses than its mundane counterparts. Scale armor grants +8 AC at levels 6-10, +9 AC at levels 11-15, +10 AC at levels 16-20, +11 AC at levels 21-25, and +13 AC at levels 26-30.
AC Bonus: +7
Speed: -1
Weight: 45 lb.
Cost: 45 gp.
Type: Scale </specific>
               <specific name="Weight" > 45 </specific>
               <specific name="Armor Bonus" > 7 </specific>
               <specific name="Check" > - </specific>
               <specific name="Speed" > -1 </specific>
               <specific name="Gold" > 45 </specific>
               <specific name="_BaseACPlus1" > 7 </specific>
               <specific name="_BaseACPlus2" > 8 </specific>
               <specific name="_BaseACPlus3" > 9 </specific>
               <specific name="_BaseACPlus4" > 10 </specific>
               <specific name="_BaseACPlus5" > 11 </specific>
               <specific name="_BaseACPlus6" > 13 </specific>
               <specific name="Armor Type" > Heavy </specific>
               <specific name="Item Slot" > Body </specific>
               <specific name="Armor Category" > Scale </specific>
            Overlapping pieces of highly durable material, such as steel or even dragon scales, make up scale armor. Despite its heaviness, scale is surprisingly easy to wear; its straps and buckles make it adjustable and able to fit snugly on the body, allowing for flexibility and agility.
	Magic appears at higher item levels, and grants higher armor bonuses than its mundane counterparts. Scale armor grants +8 AC at levels 6-10, +9 AC at levels 11-15, +10 AC at levels 16-20, +11 AC at levels 21-25, and +13 AC at levels 26-30.
            </RulesElement>
            <RulesElement name="Veteran&apos;s Armor +1" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_1883" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1883&amp;ftype=1" charelem="201" legality="rules-legal" >
               <specific name="Flavor" > Battered and worn, this unassuming armor helps you get the most out of your experiences. </specific>
               <specific name="Level" > 2 </specific>
               <specific name="Gold" > 520 </specific>
               <specific name="Magic Item Type" > Armor </specific>
               <specific name="_Rarity" > Common </specific>
               <specific name="_Bonus" > +1 </specific>
               <specific name="_Enhancement" > AC </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="_Tags" > Essentials </specific>
               <specific name="Armor" > Any </specific>
               <specific name="_MagicItemTemplate" > ID_FMP_MAGIC_ITEM_TEMPLATE_149345 </specific>
               <specific name="Property" > When you spend an action point, you gain a +1 item bonus to all attack rolls and defenses until the end of your next turn. </specific>
               <specific name="Enhancement" > +1 AC </specific>
            </RulesElement>
         </loot>
         <loot count="0" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Greatsword" type="Weapon" internal-id="ID_FMP_WEAPON_27" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=27&amp;ftype=3" charelem="202" legality="rules-legal" >
               <specific name="Full Text" > Greatsword
Military two-handed melee weapon
Cost: 30 gp
Damage: 1d10
Proficient: +3
Weight: 8 lb.
Group: 
Heavy blade (Blades are balanced edged weapons. Heavy blades share some of the precision of light blades and some of the mass of axes. Heavy blades are used primarily for slashing cuts rather than stabs and thrusts.). </specific>
               <specific name="Weight" > 8 </specific>
               <specific name="Gold" > 30 </specific>
               <specific name="Damage" > 1d10 </specific>
               <specific name="Proficiency Bonus" > 3 </specific>
               <specific name="Weapon Category" > Military Melee </specific>
               <specific name="Hands Required" > Two-Handed </specific>
               <specific name="Item Slot" > Two-Hands </specific>
               <specific name="Group" > Heavy Blade </specific>
            </RulesElement>
            <RulesElement name="Ki Weapon +1" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_8630" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=8630&amp;ftype=1" charelem="203" legality="rules-legal" >
               <specific name="Flavor" > This weapon seems to become one with your body, allowing you to deal more damage when you strike with multiple blows. </specific>
               <specific name="Level" > 3 </specific>
               <specific name="Gold" > 680 </specific>
               <specific name="Magic Item Type" > Weapon </specific>
               <specific name="Critical" > +1d8 damage per plus </specific>
               <specific name="_Rarity" > Common </specific>
               <specific name="_Bonus" > +1 </specific>
               <specific name="_Enhancement" > Attack rolls and damage rolls </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Weapon" > Any </specific>
               <specific name="_MagicItemTemplate" > ID_FMP_MAGIC_ITEM_TEMPLATE_148047 </specific>
               <specific name="Property" > Once per turn, when you use your Flurry of Blows power, it deals 2 extra damage to its targets. </specific>
               <specific name="Enhancement" > +1 attack rolls and damage rolls </specific>
            </RulesElement>
         </loot>
         <loot count="0" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Scale Armor" type="Armor" internal-id="ID_FMP_ARMOR_5" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=5&amp;ftype=2" charelem="204" legality="rules-legal" >
               <specific name="Full Text" > Scale Armor
Description: Overlapping pieces of highly durable material, such as steel or even dragon scales, make up scale armor. Despite its heaviness, scale is surprisingly easy to wear; its straps and buckles make it adjustable and able to fit snugly on the body, allowing for flexibility and agility.
	Magic appears at higher item levels, and grants higher armor bonuses than its mundane counterparts. Scale armor grants +8 AC at levels 6-10, +9 AC at levels 11-15, +10 AC at levels 16-20, +11 AC at levels 21-25, and +13 AC at levels 26-30.
AC Bonus: +7
Speed: -1
Weight: 45 lb.
Cost: 45 gp.
Type: Scale </specific>
               <specific name="Weight" > 45 </specific>
               <specific name="Armor Bonus" > 7 </specific>
               <specific name="Check" > - </specific>
               <specific name="Speed" > -1 </specific>
               <specific name="Gold" > 45 </specific>
               <specific name="_BaseACPlus1" > 7 </specific>
               <specific name="_BaseACPlus2" > 8 </specific>
               <specific name="_BaseACPlus3" > 9 </specific>
               <specific name="_BaseACPlus4" > 10 </specific>
               <specific name="_BaseACPlus5" > 11 </specific>
               <specific name="_BaseACPlus6" > 13 </specific>
               <specific name="Armor Type" > Heavy </specific>
               <specific name="Item Slot" > Body </specific>
               <specific name="Armor Category" > Scale </specific>
            Overlapping pieces of highly durable material, such as steel or even dragon scales, make up scale armor. Despite its heaviness, scale is surprisingly easy to wear; its straps and buckles make it adjustable and able to fit snugly on the body, allowing for flexibility and agility.
	Magic appears at higher item levels, and grants higher armor bonuses than its mundane counterparts. Scale armor grants +8 AC at levels 6-10, +9 AC at levels 11-15, +10 AC at levels 16-20, +11 AC at levels 21-25, and +13 AC at levels 26-30.
            </RulesElement>
            <RulesElement name="Savage Armor +1" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_4353" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=4353&amp;ftype=1" charelem="205" legality="rules-legal" >
               <specific name="Flavor" > Grotesque faces contort on this armor&apos;s surface, howling with glee as the battle rages. </specific>
               <specific name="Level" > 2 </specific>
               <specific name="Gold" > 520 </specific>
               <specific name="Magic Item Type" > Armor </specific>
               <specific name="_Rarity" > Uncommon </specific>
               <specific name="_Bonus" > +1 </specific>
               <specific name="_Enhancement" > AC </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Armor" > Scale, Plate </specific>
               <specific name="_MagicItemTemplate" > ID_FMP_MAGIC_ITEM_TEMPLATE_148755 </specific>
               <specific name="Property" > You gain an item bonus to Intimidate checks equal to the armor&apos;s enhancement bonus. </specific>
               <specific name="Power" > Power * Daily (Minor Action)
You shriek and your armor howls with you, pushing all adjacent enemies 1 square. </specific>
               <specific name="Enhancement" > +1 AC </specific>
            </RulesElement>
         </loot>
         <loot count="0" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Amulet of Protection +1" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_1047" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1047&amp;ftype=1" charelem="206" legality="rules-legal" >
               <specific name="Flavor" > This light blue amulet increases your defenses. </specific>
               <specific name="Level" > 1 </specific>
               <specific name="Gold" > 360 </specific>
               <specific name="Magic Item Type" > Neck Slot Item </specific>
               <specific name="Item Slot" > Neck </specific>
               <specific name="_Rarity" > Common </specific>
               <specific name="_Bonus" > +1 </specific>
               <specific name="_Enhancement" > Fortitude, Reflex, and Will </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="_Tags" > Essentials </specific>
               <specific name="_MagicItemTemplate" > ID_FMP_MAGIC_ITEM_TEMPLATE_146850 </specific>
               <specific name="Enhancement" > +1 Fortitude, Reflex, and Will </specific>
            </RulesElement>
         </loot>
         <loot count="0" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Greatsword" type="Weapon" internal-id="ID_FMP_WEAPON_27" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=27&amp;ftype=3" charelem="207" legality="rules-legal" >
               <specific name="Full Text" > Greatsword
Military two-handed melee weapon
Cost: 30 gp
Damage: 1d10
Proficient: +3
Weight: 8 lb.
Group: 
Heavy blade (Blades are balanced edged weapons. Heavy blades share some of the precision of light blades and some of the mass of axes. Heavy blades are used primarily for slashing cuts rather than stabs and thrusts.). </specific>
               <specific name="Weight" > 8 </specific>
               <specific name="Gold" > 30 </specific>
               <specific name="Damage" > 1d10 </specific>
               <specific name="Proficiency Bonus" > 3 </specific>
               <specific name="Weapon Category" > Military Melee </specific>
               <specific name="Hands Required" > Two-Handed </specific>
               <specific name="Item Slot" > Two-Hands </specific>
               <specific name="Group" > Heavy Blade </specific>
            </RulesElement>
         </loot>
         <loot count="0" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Circlet of Second Chances" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_3433" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=3433&amp;ftype=1" charelem="208" legality="rules-legal" >
               <specific name="Flavor" > Luck favors those who don this plain copper accessory. </specific>
               <specific name="Level" > 3 </specific>
               <specific name="Gold" > 680 </specific>
               <specific name="Magic Item Type" > Head Slot Item </specific>
               <specific name="Item Slot" > Head </specific>
               <specific name="_Rarity" > Uncommon </specific>
               <specific name="_Bonus" > +0 </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Power" > Power * Daily (No Action)
Use this power when you fail a saving throw. Reroll the saving throw, using the second result even if it&apos;s lower. </specific>
            </RulesElement>
         </loot>
         <loot count="0" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Amulet of Life +1" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_8233" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=8233&amp;ftype=1" charelem="209" legality="rules-legal" >
               <specific name="Flavor" > Crafted in orum, and in the shape of a stylized sun, this amulet flairs with amber light whenever it&apos;s used. </specific>
               <specific name="Level" > 5 </specific>
               <specific name="Gold" > 1000 </specific>
               <specific name="Magic Item Type" > Neck Slot Item </specific>
               <specific name="Item Slot" > Neck </specific>
               <specific name="_Rarity" > Uncommon </specific>
               <specific name="_Bonus" > +1 </specific>
               <specific name="_Enhancement" > Fortitude, Reflex, and Will </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="_MagicItemTemplate" > ID_FMP_MAGIC_ITEM_TEMPLATE_146846 </specific>
               <specific name="Power" > Power (Healing) * Encounter (Free Action)
	Trigger: Use this power when you spend a healing surge.
	Effect: You can spend an additional healing surge. </specific>
               <specific name="Enhancement" > +1 Fortitude, Reflex, and Will </specific>
            </RulesElement>
         </loot>
         <loot count="0" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Greatspear" type="Weapon" internal-id="ID_FMP_WEAPON_64" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=64&amp;ftype=3" charelem="210" legality="rules-legal" >
               <specific name="Full Text" > Greatspear
Superior two-handed melee weapon
Cost: 25 gp
Damage: 1d10
Proficient: +3
Range: -
Weight: 8 lb.

This reach weapon resembles a longspear, but its broad head and strong haft allow it to strike with increased force.

Properties: 
Reach (With a reach weapon, you can attack enemies that are 2 squares away from you as well as adjacent enemies, with no attack penalty. You can still make opportunity attacks only against adjacent enemies. Likewise, you can flank only an adjacent enemy.).

Group: 
Polearm (Polearms are weapons mounted at the end of long hafts. All polearms also fall into another category of weapon, usually axe, heavy blade, or spear. Polearms are reach weapons.).
Spear (Consisting of a stabbing head on the end of a long shaft, a spear is great for lunging attacks.). </specific>
               <specific name="Weight" > 8 </specific>
               <specific name="Gold" > 25 </specific>
               <specific name="Range" />
               <specific name="Damage" > 1d10 </specific>
               <specific name="Proficiency Bonus" > 3 </specific>
               <specific name="Weapon Category" > Superior Melee </specific>
               <specific name="Hands Required" > Two-Handed </specific>
               <specific name="Item Slot" > Two-Hands </specific>
               <specific name="Group" > Polearm, Spear </specific>
               <specific name="Properties" > Reach </specific>
            This reach weapon resembles a longspear, but its broad head and strong haft allow it to strike with increased force.
            </RulesElement>
            <RulesElement name="Deathstalker Weapon +1" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2020" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2020&amp;ftype=1" charelem="211" legality="rules-legal" >
               <specific name="Flavor" > This weapon leaves a wound that is black and withered, which continues to plague an enemy long after the attack was made. </specific>
               <specific name="Level" > 4 </specific>
               <specific name="Gold" > 840 </specific>
               <specific name="Magic Item Type" > Weapon </specific>
               <specific name="Critical" > +1d6 necrotic damage per plus </specific>
               <specific name="_Rarity" > Uncommon </specific>
               <specific name="_Bonus" > +1 </specific>
               <specific name="_Enhancement" > Attack rolls and damage rolls </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Weapon" > Any </specific>
               <specific name="_MagicItemTemplate" > ID_FMP_MAGIC_ITEM_TEMPLATE_147398 </specific>
               <specific name="Power" > Power (Necrotic) * Daily (Free Action)
Use this power when you hit with the weapon. The target takes ongoing 5 necrotic damage (save ends). Saves made to end this effect take a -2 penalty. </specific>
               <specific name="Enhancement" > +1 attack rolls and damage rolls </specific>
            </RulesElement>
         </loot>
         <loot count="0" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Scale Armor" type="Armor" internal-id="ID_FMP_ARMOR_5" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=5&amp;ftype=2" charelem="212" legality="rules-legal" >
               <specific name="Full Text" > Scale Armor
Description: Overlapping pieces of highly durable material, such as steel or even dragon scales, make up scale armor. Despite its heaviness, scale is surprisingly easy to wear; its straps and buckles make it adjustable and able to fit snugly on the body, allowing for flexibility and agility.
	Magic appears at higher item levels, and grants higher armor bonuses than its mundane counterparts. Scale armor grants +8 AC at levels 6-10, +9 AC at levels 11-15, +10 AC at levels 16-20, +11 AC at levels 21-25, and +13 AC at levels 26-30.
AC Bonus: +7
Speed: -1
Weight: 45 lb.
Cost: 45 gp.
Type: Scale </specific>
               <specific name="Weight" > 45 </specific>
               <specific name="Armor Bonus" > 7 </specific>
               <specific name="Check" > - </specific>
               <specific name="Speed" > -1 </specific>
               <specific name="Gold" > 45 </specific>
               <specific name="_BaseACPlus1" > 7 </specific>
               <specific name="_BaseACPlus2" > 8 </specific>
               <specific name="_BaseACPlus3" > 9 </specific>
               <specific name="_BaseACPlus4" > 10 </specific>
               <specific name="_BaseACPlus5" > 11 </specific>
               <specific name="_BaseACPlus6" > 13 </specific>
               <specific name="Armor Type" > Heavy </specific>
               <specific name="Item Slot" > Body </specific>
               <specific name="Armor Category" > Scale </specific>
            Overlapping pieces of highly durable material, such as steel or even dragon scales, make up scale armor. Despite its heaviness, scale is surprisingly easy to wear; its straps and buckles make it adjustable and able to fit snugly on the body, allowing for flexibility and agility.
	Magic appears at higher item levels, and grants higher armor bonuses than its mundane counterparts. Scale armor grants +8 AC at levels 6-10, +9 AC at levels 11-15, +10 AC at levels 16-20, +11 AC at levels 21-25, and +13 AC at levels 26-30.
            </RulesElement>
            <RulesElement name="Imposter&apos;s Armor +2" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_1625" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1625&amp;ftype=1" charelem="213" legality="rules-legal" >
               <specific name="Flavor" > In the blink of an eye, this metal armor can fade into rags or robes, providing the perfect disguise for any situation. </specific>
               <specific name="Level" > 6 </specific>
               <specific name="Gold" > 1800 </specific>
               <specific name="Magic Item Type" > Armor </specific>
               <specific name="_Rarity" > Uncommon </specific>
               <specific name="_Bonus" > +2 </specific>
               <specific name="_Enhancement" > AC </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Armor" > Chain, Scale, Plate </specific>
               <specific name="_MagicItemTemplate" > ID_FMP_MAGIC_ITEM_TEMPLATE_147971 </specific>
               <specific name="Power" > Power (Polymorph) *  (Minor Action)
You can transform this armor into a normal-looking set of clothes. While in clothes form, the armor does not provide an armor bonus, but neither does it impose an armor check penalty or speed reduction. You can add this armor&apos;s enhancement bonus to any Bluff check made to attempt to disguise your appearance. You can change this armor back into its true form as a minor action. </specific>
               <specific name="Enhancement" > +2 AC </specific>
            </RulesElement>
         </loot>
         <loot count="0" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Iron Armbands of Power (heroic tier)" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_3234" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=3234&amp;ftype=1" charelem="214" legality="rules-legal" >
               <specific name="Flavor" > These plate armbands enhance the damage you dole out. </specific>
               <specific name="Level" > 6 </specific>
               <specific name="Gold" > 1800 </specific>
               <specific name="Magic Item Type" > Arms Slot Item </specific>
               <specific name="Item Slot" > Arms </specific>
               <specific name="_Rarity" > Uncommon </specific>
               <specific name="_Bonus" > +0 </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="_MagicItemTemplate" > ID_FMP_MAGIC_ITEM_TEMPLATE_148004 </specific>
               <specific name="Property" > Gain a +2 item bonus to melee damage rolls. </specific>
            </RulesElement>
         </loot>
         <loot count="0" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Greatspear" type="Weapon" internal-id="ID_FMP_WEAPON_64" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=64&amp;ftype=3" charelem="215" legality="rules-legal" >
               <specific name="Full Text" > Greatspear
Superior two-handed melee weapon
Cost: 25 gp
Damage: 1d10
Proficient: +3
Range: -
Weight: 8 lb.

This reach weapon resembles a longspear, but its broad head and strong haft allow it to strike with increased force.

Properties: 
Reach (With a reach weapon, you can attack enemies that are 2 squares away from you as well as adjacent enemies, with no attack penalty. You can still make opportunity attacks only against adjacent enemies. Likewise, you can flank only an adjacent enemy.).

Group: 
Polearm (Polearms are weapons mounted at the end of long hafts. All polearms also fall into another category of weapon, usually axe, heavy blade, or spear. Polearms are reach weapons.).
Spear (Consisting of a stabbing head on the end of a long shaft, a spear is great for lunging attacks.). </specific>
               <specific name="Weight" > 8 </specific>
               <specific name="Gold" > 25 </specific>
               <specific name="Range" />
               <specific name="Damage" > 1d10 </specific>
               <specific name="Proficiency Bonus" > 3 </specific>
               <specific name="Weapon Category" > Superior Melee </specific>
               <specific name="Hands Required" > Two-Handed </specific>
               <specific name="Item Slot" > Two-Hands </specific>
               <specific name="Group" > Polearm, Spear </specific>
               <specific name="Properties" > Reach </specific>
            This reach weapon resembles a longspear, but its broad head and strong haft allow it to strike with increased force.
            </RulesElement>
            <RulesElement name="Strongheart Weapon +2" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2384" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2384&amp;ftype=1" charelem="216" legality="rules-legal" >
               <specific name="Flavor" > You can overcome bodily weakness when you attack with this weapon. </specific>
               <specific name="Level" > 8 </specific>
               <specific name="Gold" > 3400 </specific>
               <specific name="Magic Item Type" > Weapon </specific>
               <specific name="Critical" > +1d8 damage per plus </specific>
               <specific name="_Rarity" > Uncommon </specific>
               <specific name="_Bonus" > +2 </specific>
               <specific name="_Enhancement" > Attack rolls and damage rolls </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Weapon" > Any melee </specific>
               <specific name="_MagicItemTemplate" > ID_FMP_MAGIC_ITEM_TEMPLATE_149067 </specific>
               <specific name="Power" > Power * Encounter (Minor Action)
Until the end of your next turn, you do not deal half damage while weakened. </specific>
               <specific name="Enhancement" > +2 attack rolls and damage rolls </specific>
            </RulesElement>
         </loot>
         <loot count="1" equip-count="1" ShowPowerCard="1" >
            <RulesElement name="Rushing Cleats" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_3344" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=3344&amp;ftype=1" charelem="40" legality="rules-legal" >
               <specific name="Flavor" > These rawhide boot straps are fitted with spikes. </specific>
               <specific name="Level" > 7 </specific>
               <specific name="Gold" > 2600 </specific>
               <specific name="Magic Item Type" > Feet Slot Item </specific>
               <specific name="Item Slot" > Feet </specific>
               <specific name="_Rarity" > Uncommon </specific>
               <specific name="_Bonus" > +0 </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Property" > Gain a +2 item bonus to bull rush attacks, and increase the push or slide effect of any close or melee attack you perform by 1 square. </specific>
            </RulesElement>
         </loot>
         <loot count="0" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Potion of Cure Moderate Wounds" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_149658.10" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=149658.10&amp;ftype=1" charelem="217" legality="rules-legal" >
               <specific name="Flavor" > This potion covers your wounds in silver light, helping them heal. </specific>
               <specific name="Level" > 10 </specific>
               <specific name="Gold" > 200 </specific>
               <specific name="Magic Item Type" > Consumable </specific>
               <specific name="Consumable" > Potion </specific>
               <specific name="_Rarity" > Uncommon </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Power" > Utility Power (Healing) * Consumable (Minor Action)
Effect: You drink the potion. If you have a healing surge, you must spend one. Instead of the hit points you would normally regain, you regain 2d8 + 10 hit points. If you are bloodied and don&apos;t have any healing surges, you still regain the hit points. If neither of these things is true, there is no effect. </specific>
            </RulesElement>
         </loot>
         <loot count="0" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Amulet of Life +2" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_8234" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=8234&amp;ftype=1" charelem="218" legality="rules-legal" >
               <specific name="Flavor" > Crafted in orum, and in the shape of a stylized sun, this amulet flairs with amber light whenever it&apos;s used. </specific>
               <specific name="Level" > 10 </specific>
               <specific name="Gold" > 5000 </specific>
               <specific name="Magic Item Type" > Neck Slot Item </specific>
               <specific name="Item Slot" > Neck </specific>
               <specific name="_Rarity" > Uncommon </specific>
               <specific name="_Bonus" > +2 </specific>
               <specific name="_Enhancement" > Fortitude, Reflex, and Will </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="_MagicItemTemplate" > ID_FMP_MAGIC_ITEM_TEMPLATE_146846 </specific>
               <specific name="Power" > Power (Healing) * Encounter (Free Action)
	Trigger: Use this power when you spend a healing surge.
	Effect: You can spend an additional healing surge. </specific>
               <specific name="Enhancement" > +2 Fortitude, Reflex, and Will </specific>
            </RulesElement>
         </loot>
         <loot count="13" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Potion of Cure Light Wounds" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_149657.1" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=149657.1&amp;ftype=1" charelem="219" legality="rules-legal" >
               <specific name="Flavor" > This potion covers your small cuts and minor bruises in dim silver light, causing them to heal over. </specific>
               <specific name="Level" > 1 </specific>
               <specific name="Gold" > 20 </specific>
               <specific name="Magic Item Type" > Consumable </specific>
               <specific name="Consumable" > Potion </specific>
               <specific name="_Rarity" > Uncommon </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Power" > Utility Power (Healing) * Consumable (Minor Action)
Effect: You drink the potion. If you have a healing surge, you must spend one. Instead of the hit points you would normally regain, you regain 1d8 + 1 hit points. If you are bloodied and don&apos;t have any healing surges, you still regain the hit points. If neither of these things is true, there is no effect. </specific>
            </RulesElement>
         </loot>
         <loot count="2" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Nail of Sealing" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_4040" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=4040&amp;ftype=1" charelem="220" legality="rules-legal" >
               <specific name="Flavor" > This thick iron nail is adorned with warding symbols and can hold shut any portal or container. </specific>
               <specific name="Level" > 4 </specific>
               <specific name="Gold" > 40 </specific>
               <specific name="Magic Item Type" > Consumable </specific>
               <specific name="Consumable" > Consumable </specific>
               <specific name="_Rarity" > Uncommon </specific>
               <specific name="_Bonus" > +0 </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Power" > Power * Consumable (Standard Action)
When you push this nail into a door, chest, or other closeable object, it magically sinks into the material of that object and seals it shut. Treat this as if you had used an Arcane Lock ritual with an Arcana check result of 25. </specific>
            </RulesElement>
         </loot>
         <loot count="1" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Bag of Holding" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_1119" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1119&amp;ftype=1" charelem="43" legality="rules-legal" >
               <specific name="Flavor" > This item appears to be a simple sack of brown canvas. </specific>
               <specific name="Level" > 5 </specific>
               <specific name="Gold" > 1000 </specific>
               <specific name="Magic Item Type" > Wondrous Item </specific>
               <specific name="_Rarity" > Uncommon </specific>
               <specific name="_Bonus" > +0 </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Property" > This bag can hold up to 200 pounds in weight or 20 cubic feet in volume, but it always weighs only 1 pound.
	Drawing an item from the bag is a minor action. </specific>
            </RulesElement>
         </loot>
         <loot count="1" equip-count="1" ShowPowerCard="1" >
            <RulesElement name="Belt of Raging Endurance (heroic tier)" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_8120" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=8120&amp;ftype=1" charelem="25" legality="rules-legal" >
               <specific name="Flavor" > The amber glow spreading from this behemoth-hide belt swirls into the spirit aura of your rage, shielding you until the glow flares red. </specific>
               <specific name="Level" > 9 </specific>
               <specific name="Gold" > 4200 </specific>
               <specific name="Magic Item Type" > Waist Slot Item </specific>
               <specific name="Item Slot" > Waist </specific>
               <specific name="_Rarity" > Uncommon </specific>
               <specific name="_Bonus" > +0 </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="_MagicItemTemplate" > ID_FMP_MAGIC_ITEM_TEMPLATE_147003 </specific>
               <specific name="Property" > You gain 1 healing surge. </specific>
               <specific name="Power" > Power * Encounter (Immediate Interrupt)
	Trigger: An enemy hits you and causes damage.
	Effect: You gain resist 15 against that attack, but you also take 10 damage at the end of your next turn. </specific>
            </RulesElement>
         </loot>
         <loot count="0" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Scale Armor" type="Armor" internal-id="ID_FMP_ARMOR_5" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=5&amp;ftype=2" charelem="221" legality="rules-legal" >
               <specific name="Full Text" > Scale Armor
Description: Overlapping pieces of highly durable material, such as steel or even dragon scales, make up scale armor. Despite its heaviness, scale is surprisingly easy to wear; its straps and buckles make it adjustable and able to fit snugly on the body, allowing for flexibility and agility.
	Magic appears at higher item levels, and grants higher armor bonuses than its mundane counterparts. Scale armor grants +8 AC at levels 6-10, +9 AC at levels 11-15, +10 AC at levels 16-20, +11 AC at levels 21-25, and +13 AC at levels 26-30.
AC Bonus: +7
Speed: -1
Weight: 45 lb.
Cost: 45 gp.
Type: Scale </specific>
               <specific name="Weight" > 45 </specific>
               <specific name="Armor Bonus" > 7 </specific>
               <specific name="Check" > - </specific>
               <specific name="Speed" > -1 </specific>
               <specific name="Gold" > 45 </specific>
               <specific name="_BaseACPlus1" > 7 </specific>
               <specific name="_BaseACPlus2" > 8 </specific>
               <specific name="_BaseACPlus3" > 9 </specific>
               <specific name="_BaseACPlus4" > 10 </specific>
               <specific name="_BaseACPlus5" > 11 </specific>
               <specific name="_BaseACPlus6" > 13 </specific>
               <specific name="Armor Type" > Heavy </specific>
               <specific name="Item Slot" > Body </specific>
               <specific name="Armor Category" > Scale </specific>
            Overlapping pieces of highly durable material, such as steel or even dragon scales, make up scale armor. Despite its heaviness, scale is surprisingly easy to wear; its straps and buckles make it adjustable and able to fit snugly on the body, allowing for flexibility and agility.
	Magic appears at higher item levels, and grants higher armor bonuses than its mundane counterparts. Scale armor grants +8 AC at levels 6-10, +9 AC at levels 11-15, +10 AC at levels 16-20, +11 AC at levels 21-25, and +13 AC at levels 26-30.
            </RulesElement>
            <RulesElement name="Solar Armor +2" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_1813" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1813&amp;ftype=1" charelem="222" legality="rules-legal" >
               <specific name="Flavor" > This copper-plated armor seems to soak up the sun, shining with a red glow that is warm and invigorating. </specific>
               <specific name="Level" > 9 </specific>
               <specific name="Gold" > 4200 </specific>
               <specific name="Magic Item Type" > Armor </specific>
               <specific name="_Rarity" > Uncommon </specific>
               <specific name="_Bonus" > +2 </specific>
               <specific name="_Enhancement" > AC </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Armor" > Scale, Plate </specific>
               <specific name="_MagicItemTemplate" > ID_FMP_MAGIC_ITEM_TEMPLATE_148903 </specific>
               <specific name="Power" > Power (Healing) *  (Immediate Reaction Action)
When you take radiant damage, you can spend a healing surge. You regain hit points equal to your healing surge value plus additional hit points equal to the armor&apos;s enhancement bonus. </specific>
               <specific name="Power" > Power (Healing) *  (Immediate Reaction Action)
When you take radiant damage, you can spend a healing surge. You regain hit points equal to your healing surge value plus additional hit points equal to the armor&apos;s enhancement bonus. </specific>
               <specific name="Enhancement" > +2 AC </specific>
            </RulesElement>
         </loot>
         <loot count="1" equip-count="1" ShowPowerCard="1" >
            <RulesElement name="Greatspear" type="Weapon" internal-id="ID_FMP_WEAPON_64" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=64&amp;ftype=3" charelem="223" legality="rules-legal" >
               <specific name="Full Text" > Greatspear
Superior two-handed melee weapon
Cost: 25 gp
Damage: 1d10
Proficient: +3
Range: -
Weight: 8 lb.

This reach weapon resembles a longspear, but its broad head and strong haft allow it to strike with increased force.

Properties: 
Reach (With a reach weapon, you can attack enemies that are 2 squares away from you as well as adjacent enemies, with no attack penalty. You can still make opportunity attacks only against adjacent enemies. Likewise, you can flank only an adjacent enemy.).

Group: 
Polearm (Polearms are weapons mounted at the end of long hafts. All polearms also fall into another category of weapon, usually axe, heavy blade, or spear. Polearms are reach weapons.).
Spear (Consisting of a stabbing head on the end of a long shaft, a spear is great for lunging attacks.). </specific>
               <specific name="Weight" > 8 </specific>
               <specific name="Gold" > 25 </specific>
               <specific name="Range" />
               <specific name="Damage" > 1d10 </specific>
               <specific name="Proficiency Bonus" > 3 </specific>
               <specific name="Weapon Category" > Superior Melee </specific>
               <specific name="Hands Required" > Two-Handed </specific>
               <specific name="Item Slot" > Two-Hands </specific>
               <specific name="Group" > Polearm, Spear </specific>
               <specific name="Properties" > Reach </specific>
            This reach weapon resembles a longspear, but its broad head and strong haft allow it to strike with increased force.
            </RulesElement>
            <RulesElement name="Withering Weapon +4" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2477" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2477&amp;ftype=1" charelem="224" legality="rules-legal" >
               <specific name="Flavor" > Each blow with this weapon weakens armor and resolve. </specific>
               <specific name="Level" > 18 </specific>
               <specific name="Gold" > 85000 </specific>
               <specific name="Magic Item Type" > Weapon </specific>
               <specific name="Critical" > +1d6 damage per plus </specific>
               <specific name="_Rarity" > Uncommon </specific>
               <specific name="_Bonus" > +4 </specific>
               <specific name="_Enhancement" > Attack rolls and damage rolls </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Weapon" > Any melee </specific>
               <specific name="_MagicItemTemplate" > ID_FMP_MAGIC_ITEM_TEMPLATE_149449 </specific>
               <specific name="Property" > Each time you hit with this weapon in melee, your target takes a cumulative –1 penalty to AC. The target can make a saving throw to end the entire penalty, but it can receive the penalty again with future attacks. </specific>
               <specific name="Enhancement" > +4 attack rolls and damage rolls </specific>
            </RulesElement>
         </loot>
         <loot count="0" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Scale Armor" type="Armor" internal-id="ID_FMP_ARMOR_5" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=5&amp;ftype=2" charelem="225" legality="rules-legal" >
               <specific name="Full Text" > Scale Armor
Description: Overlapping pieces of highly durable material, such as steel or even dragon scales, make up scale armor. Despite its heaviness, scale is surprisingly easy to wear; its straps and buckles make it adjustable and able to fit snugly on the body, allowing for flexibility and agility.
	Magic appears at higher item levels, and grants higher armor bonuses than its mundane counterparts. Scale armor grants +8 AC at levels 6-10, +9 AC at levels 11-15, +10 AC at levels 16-20, +11 AC at levels 21-25, and +13 AC at levels 26-30.
AC Bonus: +7
Speed: -1
Weight: 45 lb.
Cost: 45 gp.
Type: Scale </specific>
               <specific name="Weight" > 45 </specific>
               <specific name="Armor Bonus" > 7 </specific>
               <specific name="Check" > - </specific>
               <specific name="Speed" > -1 </specific>
               <specific name="Gold" > 45 </specific>
               <specific name="_BaseACPlus1" > 7 </specific>
               <specific name="_BaseACPlus2" > 8 </specific>
               <specific name="_BaseACPlus3" > 9 </specific>
               <specific name="_BaseACPlus4" > 10 </specific>
               <specific name="_BaseACPlus5" > 11 </specific>
               <specific name="_BaseACPlus6" > 13 </specific>
               <specific name="Armor Type" > Heavy </specific>
               <specific name="Item Slot" > Body </specific>
               <specific name="Armor Category" > Scale </specific>
            Overlapping pieces of highly durable material, such as steel or even dragon scales, make up scale armor. Despite its heaviness, scale is surprisingly easy to wear; its straps and buckles make it adjustable and able to fit snugly on the body, allowing for flexibility and agility.
	Magic appears at higher item levels, and grants higher armor bonuses than its mundane counterparts. Scale armor grants +8 AC at levels 6-10, +9 AC at levels 11-15, +10 AC at levels 16-20, +11 AC at levels 21-25, and +13 AC at levels 26-30.
            </RulesElement>
            <RulesElement name="Armor of Attraction +4" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_1444" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1444&amp;ftype=1" charelem="226" legality="rules-legal" >
               <specific name="Flavor" > This stout armor can attract projectiles, allowing you to better protect your allies. </specific>
               <specific name="Level" > 19 </specific>
               <specific name="Gold" > 105000 </specific>
               <specific name="Magic Item Type" > Armor </specific>
               <specific name="_Rarity" > Uncommon </specific>
               <specific name="_Bonus" > +4 </specific>
               <specific name="_Enhancement" > AC </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Armor" > Scale, Plate </specific>
               <specific name="_MagicItemTemplate" > ID_FMP_MAGIC_ITEM_TEMPLATE_146884 </specific>
               <specific name="Power" > Power * Encounter (Immediate Interrupt)
Use this power when an attack against AC or Reflex targets an adjacent ally, or when a ranged attack against an ally within 5 squares of you targets AC or Reflex. You become the target of the attack. </specific>
               <specific name="Enhancement" > +4 AC </specific>
            </RulesElement>
         </loot>
         <loot count="1" equip-count="1" ShowPowerCard="1" >
            <RulesElement name="Helm of Able Defense" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_7525" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=7525&amp;ftype=1" charelem="13" legality="rules-legal" >
               <specific name="Flavor" > Lifelike crystal eyes in the back of this helmet focus your will and bolster your defenses. </specific>
               <specific name="Level" > 14 </specific>
               <specific name="Gold" > 21000 </specific>
               <specific name="Magic Item Type" > Head Slot Item </specific>
               <specific name="Item Slot" > Head </specific>
               <specific name="_Item_Set_ID" > ID_FMP_ITEM_SET_21 </specific>
               <specific name="_Rarity" > Uncommon </specific>
               <specific name="_Bonus" > +0 </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Property" > You gain a +1 item bonus to Will. </specific>
               <specific name="Property" > You gain a +1 item bonus to Will. </specific>
               <specific name="_SupportsID" > ID_FMP_ITEM_SET_21 </specific>
            </RulesElement>
         </loot>
         <loot count="1" equip-count="1" ShowPowerCard="1" >
            <RulesElement name="Iron Armbands of Power (paragon tier)" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_3235" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=3235&amp;ftype=1" charelem="45" legality="rules-legal" >
               <specific name="Flavor" > These plate armbands enhance the damage you dole out. </specific>
               <specific name="Level" > 16 </specific>
               <specific name="Gold" > 45000 </specific>
               <specific name="Magic Item Type" > Arms Slot Item </specific>
               <specific name="Item Slot" > Arms </specific>
               <specific name="_Rarity" > Uncommon </specific>
               <specific name="_Bonus" > +0 </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="_MagicItemTemplate" > ID_FMP_MAGIC_ITEM_TEMPLATE_148004 </specific>
               <specific name="Property" > Gain a +4 item bonus to melee damage rolls. </specific>
            </RulesElement>
         </loot>
         <loot count="1" equip-count="1" ShowPowerCard="1" >
            <RulesElement name="Amulet of Life +4" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_8236" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=8236&amp;ftype=1" charelem="12" legality="rules-legal" >
               <specific name="Flavor" > Crafted in orum, and in the shape of a stylized sun, this amulet flairs with amber light whenever it&apos;s used. </specific>
               <specific name="Level" > 20 </specific>
               <specific name="Gold" > 125000 </specific>
               <specific name="Magic Item Type" > Neck Slot Item </specific>
               <specific name="Item Slot" > Neck </specific>
               <specific name="_Rarity" > Uncommon </specific>
               <specific name="_Bonus" > +4 </specific>
               <specific name="_Enhancement" > Fortitude, Reflex, and Will </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="_MagicItemTemplate" > ID_FMP_MAGIC_ITEM_TEMPLATE_146846 </specific>
               <specific name="Power" > Power (Healing) * Encounter (Free Action)
	Trigger: Use this power when you spend a healing surge.
	Effect: You can spend an additional healing surge. </specific>
               <specific name="Enhancement" > +4 Fortitude, Reflex, and Will </specific>
            </RulesElement>
         </loot>
         <loot count="1" equip-count="1" ShowPowerCard="1" >
            <RulesElement name="Ring of Circling Fangs" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_9749" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=9749&amp;ftype=1" charelem="227" legality="rules-legal" >
               <specific name="Flavor" > This slim, silver ring is engraved with a simple circle. </specific>
               <specific name="Level" > 20 </specific>
               <specific name="Gold" > 125000 </specific>
               <specific name="Magic Item Type" > Ring </specific>
               <specific name="Item Slot" > Ring </specific>
               <specific name="_Rarity" > Uncommon </specific>
               <specific name="_Bonus" > +0 </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Property" > While you are bloodied, you gain an aura of force daggers. Any adjacent creature that attacks you takes 10 force damage. </specific>
               <specific name="Property" > While you are bloodied, you gain an aura of force daggers. Any adjacent creature that attacks you takes 10 force damage. </specific>
               <specific name="Power" > Power (Force) * Encounter (Standard Action)
	Effect: One creature within 3 squares of you takes 20 force damage. </specific>
            </RulesElement>
         </loot>
         <loot count="1" equip-count="1" ShowPowerCard="1" >
            <RulesElement name="Ring of Ramming" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_3750" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=3750&amp;ftype=1" charelem="228" legality="rules-legal" >
               <specific name="Flavor" > This iron ring is inlaid with the image of a ram&apos;s head. </specific>
               <specific name="Level" > 18 </specific>
               <specific name="Gold" > 85000 </specific>
               <specific name="Magic Item Type" > Ring </specific>
               <specific name="Item Slot" > Ring </specific>
               <specific name="_Rarity" > Uncommon </specific>
               <specific name="_Bonus" > +0 </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Property" > When you push a target, you can increase the distance pushed by 1 square. </specific>
               <specific name="Power" > Power (Force) * Daily (Standard Action)
	Make an attack: Ranged 10; +21 vs. Fortitude; on a hit, the target takes 3d10 force damage and is pushed 1 square (this distance can be increased by the ring&apos;s property). You can instead use this power to make a Strength attack to break down a door or other object using the same attack bonus.
If you&apos;ve reached at least one milestone today, a hit deals 5d10 force damage and pushes the target 3 squares (which can be increased by the ring&apos;s property). </specific>
            </RulesElement>
         </loot>
         <loot count="1" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Handy Haversack" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_1128" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1128&amp;ftype=1" charelem="44" legality="rules-legal" >
               <specific name="Flavor" > This ordinary-looking backpack is surprisingly light. </specific>
               <specific name="Level" > 10 </specific>
               <specific name="Gold" > 5000 </specific>
               <specific name="Magic Item Type" > Wondrous Item </specific>
               <specific name="_Rarity" > Uncommon </specific>
               <specific name="_Bonus" > +0 </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Property" > This backpack can hold up to 1,000 pounds in weight or 100 cubic feet in volume, but it always weighs only 1 pound.
	Drawing an item from the backpack is a minor action. </specific>
            </RulesElement>
         </loot>
         <loot count="1" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Climber&apos;s Rope" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_149624.6" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=149624.6&amp;ftype=1" charelem="229" legality="rules-legal" >
               <specific name="Flavor" > When a slope or wall cannot be climbed, this projectile creates an easier path. </specific>
               <specific name="Level" > 6 </specific>
               <specific name="Gold" > 1800 </specific>
               <specific name="Magic Item Type" > Wondrous Item </specific>
               <specific name="_Rarity" > Common </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Power" > Utility Power * Encounter (Standard Action)
Requirement: You must be wielding a bow or a crossbow.
Effect: You fire this projectile from your bow or crossbow at a target within normal range that you can see, either at a wall, ceiling, or similar surface or at a sufficiently heavy unattended object, such as a large statue. A magic rope then trails out behind the projectile, connecting the point of impact to your position. The rope can support up to 500 pounds at one time. The rope remains in place until the end of the encounter or until you dismiss it as a minor action. If fired at a creature, the projectile deals no damage. </specific>
            </RulesElement>
         </loot>
         <loot count="1" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Rope of Climbing" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_1134" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1134&amp;ftype=1" charelem="230" legality="rules-legal" >
               <specific name="Flavor" > A coil of golden rope. </specific>
               <specific name="Level" > 10 </specific>
               <specific name="Gold" > 5000 </specific>
               <specific name="Magic Item Type" > Wondrous Item </specific>
               <specific name="_Rarity" > Common </specific>
               <specific name="_Bonus" > +0 </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Property" > This 100-foot-long rope has 100 hit points and can hold up to 2,500 pounds (roughly 10 Medium creatures and their gear). </specific>
               <specific name="Power" > Power *  (Minor Action)
The rope moves up to 10 squares along a horizontal or a vertical surface. As part of the same action, it can tie itself around an object to create a secure point for climbing. It can&apos;t tie itself to or otherwise affect a creature.
Anyone holding the rope can activate its power. On command, the rope unties itself as a minor action. </specific>
            </RulesElement>
         </loot>
         <loot count="1" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Dice of Auspicious Fortune" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_8245" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=8245&amp;ftype=1" charelem="231" legality="rules-legal" >
               <specific name="Flavor" > The faces of these wooden dice show symbols the halflings associate with good luck. </specific>
               <specific name="Level" > 11 </specific>
               <specific name="Gold" > 9000 </specific>
               <specific name="Magic Item Type" > Wondrous Item </specific>
               <specific name="_Rarity" > Rare </specific>
               <specific name="_Bonus" > +0 </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Power" > Power * Daily (Standard Action)
	Effect: Roll 3 d20s. The results are &quot;stored&quot; in these dice until the end of your next extended rest or until you use this power again. Using this power removes any results previously stored in the dice. </specific>
               <specific name="Power" > Power * Daily (Standard Action)
	Effect: Roll 3 d20s. The results are &quot;stored&quot; in these dice until the end of your next extended rest or until you use this power again. Using this power removes any results previously stored in the dice. </specific>
            </RulesElement>
         </loot>
         <loot count="1" equip-count="1" ShowPowerCard="1" >
            <RulesElement name="Kreen Scale Armor" type="Armor" internal-id="ID_FMP_ARMOR_92" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=92&amp;ftype=2" charelem="9" legality="rules-legal" >
               <specific name="Full Text" > Kreen Scale Armor
Description: Heavier Athasian masterwork armor is made from horn, scales, and carapaces, such as those found on mekillots or shed by thri-kreen. Advanced masterwork scale armor is created from the tough, thick hides of terrifying rampagers and drakes. The greatest armor of this type is formed from scales shed by the Dragon as it rampages through a region.
AC Bonus: +9
Minimum Enhancement Value: +4
Speed: -1
Weight: 45 lb.
Cost: Special
Special: +2 Fortitude
Type: Scale </specific>
               <specific name="Weight" > 45 </specific>
               <specific name="Armor Bonus" > 9 </specific>
               <specific name="Minimum Enhancement Bonus" > 4 </specific>
               <specific name="Check" > - </specific>
               <specific name="Speed" > -1 </specific>
               <specific name="Gold" > 45000 </specific>
               <specific name="Special" > +2 Fortitude </specific>
               <specific name="Armor Type" > Heavy </specific>
               <specific name="Item Slot" > Body </specific>
               <specific name="Armor Category" > Scale </specific>
            Heavier Athasian masterwork armor is made from horn, scales, and carapaces, such as those found on mekillots or shed by thri-kreen. Advanced masterwork scale armor is created from the tough, thick hides of terrifying rampagers and drakes. The greatest armor of this type is formed from scales shed by the Dragon as it rampages through a region.
            </RulesElement>
            <RulesElement name="Armor of Attraction +4" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_1444" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1444&amp;ftype=1" charelem="10" legality="rules-legal" >
               <specific name="Flavor" > This stout armor can attract projectiles, allowing you to better protect your allies. </specific>
               <specific name="Level" > 19 </specific>
               <specific name="Gold" > 105000 </specific>
               <specific name="Magic Item Type" > Armor </specific>
               <specific name="_Rarity" > Uncommon </specific>
               <specific name="_Bonus" > +4 </specific>
               <specific name="_Enhancement" > AC </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Armor" > Scale, Plate </specific>
               <specific name="_MagicItemTemplate" > ID_FMP_MAGIC_ITEM_TEMPLATE_146884 </specific>
               <specific name="Power" > Power * Encounter (Immediate Interrupt)
Use this power when an attack against AC or Reflex targets an adjacent ally, or when a ranged attack against an ally within 5 squares of you targets AC or Reflex. You become the target of the attack. </specific>
               <specific name="Enhancement" > +4 AC </specific>
            </RulesElement>
         </loot>
         <loot count="0" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Wyrmscale Armor" type="Armor" internal-id="ID_FMP_ARMOR_18" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=18&amp;ftype=2" charelem="232" legality="rules-legal" >
               <specific name="Full Text" > Wyrmscale Armor
Description: Wyrmscale is made using ancient techniques the dragonborn invented to mimic the strength of overlapping dragon scales.
AC Bonus: +10
Minimum Enhancement Value: +4
Speed: -1
Weight: 45 lb.
Cost: Special
Type: Scale </specific>
               <specific name="Weight" > 45 </specific>
               <specific name="Armor Bonus" > 10 </specific>
               <specific name="Minimum Enhancement Bonus" > 4 </specific>
               <specific name="Check" > - </specific>
               <specific name="Speed" > -1 </specific>
               <specific name="Gold" > 45000 </specific>
               <specific name="Armor Type" > Heavy </specific>
               <specific name="Item Slot" > Body </specific>
               <specific name="Armor Category" > Scale </specific>
            Wyrmscale is made using ancient techniques the dragonborn invented to mimic the strength of overlapping dragon scales.
            </RulesElement>
            <RulesElement name="Armor of Attraction +4" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_1444" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1444&amp;ftype=1" charelem="233" legality="rules-legal" >
               <specific name="Flavor" > This stout armor can attract projectiles, allowing you to better protect your allies. </specific>
               <specific name="Level" > 19 </specific>
               <specific name="Gold" > 105000 </specific>
               <specific name="Magic Item Type" > Armor </specific>
               <specific name="_Rarity" > Uncommon </specific>
               <specific name="_Bonus" > +4 </specific>
               <specific name="_Enhancement" > AC </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Armor" > Scale, Plate </specific>
               <specific name="_MagicItemTemplate" > ID_FMP_MAGIC_ITEM_TEMPLATE_146884 </specific>
               <specific name="Power" > Power * Encounter (Immediate Interrupt)
Use this power when an attack against AC or Reflex targets an adjacent ally, or when a ranged attack against an ally within 5 squares of you targets AC or Reflex. You become the target of the attack. </specific>
               <specific name="Enhancement" > +4 AC </specific>
            </RulesElement>
         </loot>
         <loot count="0" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Longbow" type="Weapon" internal-id="ID_FMP_WEAPON_40" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=40&amp;ftype=3" charelem="234" legality="rules-legal" >
               <specific name="Full Text" > Longbow
Military two-handed ranged weapon
Cost: 30 gp
Damage: 1d10
Proficient: +2
Range: 20/40
Weight: 3 lb.

Properties: 
Load Free (Ranged weapons that loose projectiles, including bows, crossbows, and slings, take some time to load. When a weapon shows “load free” on the ranged weapons table, that means you draw and load ammunition as a free action, effectively part of the action used to attack with the weapon. Any weapon that has the load property requires two hands to load, even if you can use only one hand to attack with it. (The sling, for example, is a one-handed weapon, but you need a free hand to load it.) The crossbow is “load minor,” which means it requires a minor action to load a bolt into the weapon. If a power allows you to hit multiple targets, the additional load time is accounted for in the power.).

Group: 
Bow (A bow is a shaft of strong, supple material with a string stretched between its two ends. It&apos;s a projectile weapon that you use to fire arrows. Bows take training to use effectively, and they can be extremely deadly in expert hands.). </specific>
               <specific name="Weight" > 3 </specific>
               <specific name="Gold" > 30 </specific>
               <specific name="Range" > 20/40 </specific>
               <specific name="Damage" > 1d10 </specific>
               <specific name="Proficiency Bonus" > 2 </specific>
               <specific name="Weapon Category" > Military Ranged </specific>
               <specific name="Hands Required" > Two-Handed </specific>
               <specific name="Item Slot" > Two-Hands </specific>
               <specific name="Group" > Bow </specific>
               <specific name="Properties" > Load Free </specific>
            </RulesElement>
            <RulesElement name="Distance Weapon +3" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2053" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2053&amp;ftype=1" charelem="235" legality="rules-legal" >
               <specific name="Flavor" > This weapon flashes brightly as it hurtles forth, moving with enough force to carry it much farther than normal. </specific>
               <specific name="Level" > 11 </specific>
               <specific name="Gold" > 9000 </specific>
               <specific name="Magic Item Type" > Weapon </specific>
               <specific name="Critical" > None </specific>
               <specific name="_Rarity" > Common </specific>
               <specific name="_Bonus" > +3 </specific>
               <specific name="_Enhancement" > Attack rolls and damage rolls </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Weapon" > Any ranged </specific>
               <specific name="_MagicItemTemplate" > ID_FMP_MAGIC_ITEM_TEMPLATE_147456 </specific>
               <specific name="Property" > Increase the weapon&apos;s normal range by 5 squares and the long range by 10 squares. </specific>
               <specific name="Enhancement" > +3 attack rolls and damage rolls </specific>
            </RulesElement>
         </loot>
         <loot count="1" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Longbow" type="Weapon" internal-id="ID_FMP_WEAPON_40" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=40&amp;ftype=3" charelem="236" legality="rules-legal" >
               <specific name="Full Text" > Longbow
Military two-handed ranged weapon
Cost: 30 gp
Damage: 1d10
Proficient: +2
Range: 20/40
Weight: 3 lb.

Properties: 
Load Free (Ranged weapons that loose projectiles, including bows, crossbows, and slings, take some time to load. When a weapon shows “load free” on the ranged weapons table, that means you draw and load ammunition as a free action, effectively part of the action used to attack with the weapon. Any weapon that has the load property requires two hands to load, even if you can use only one hand to attack with it. (The sling, for example, is a one-handed weapon, but you need a free hand to load it.) The crossbow is “load minor,” which means it requires a minor action to load a bolt into the weapon. If a power allows you to hit multiple targets, the additional load time is accounted for in the power.).

Group: 
Bow (A bow is a shaft of strong, supple material with a string stretched between its two ends. It&apos;s a projectile weapon that you use to fire arrows. Bows take training to use effectively, and they can be extremely deadly in expert hands.). </specific>
               <specific name="Weight" > 3 </specific>
               <specific name="Gold" > 30 </specific>
               <specific name="Range" > 20/40 </specific>
               <specific name="Damage" > 1d10 </specific>
               <specific name="Proficiency Bonus" > 2 </specific>
               <specific name="Weapon Category" > Military Ranged </specific>
               <specific name="Hands Required" > Two-Handed </specific>
               <specific name="Item Slot" > Two-Hands </specific>
               <specific name="Group" > Bow </specific>
               <specific name="Properties" > Load Free </specific>
            </RulesElement>
            <RulesElement name="Distance Weapon +1" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2051" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2051&amp;ftype=1" charelem="237" legality="rules-legal" >
               <specific name="Flavor" > This weapon flashes brightly as it hurtles forth, moving with enough force to carry it much farther than normal. </specific>
               <specific name="Level" > 1 </specific>
               <specific name="Gold" > 360 </specific>
               <specific name="Magic Item Type" > Weapon </specific>
               <specific name="Critical" > None </specific>
               <specific name="_Rarity" > Common </specific>
               <specific name="_Bonus" > +1 </specific>
               <specific name="_Enhancement" > Attack rolls and damage rolls </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Weapon" > Any ranged </specific>
               <specific name="_MagicItemTemplate" > ID_FMP_MAGIC_ITEM_TEMPLATE_147456 </specific>
               <specific name="Property" > Increase the weapon&apos;s normal range by 5 squares and the long range by 10 squares. </specific>
               <specific name="Enhancement" > +1 attack rolls and damage rolls </specific>
            </RulesElement>
         </loot>
         <loot count="1" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Phantom Bridle" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_9165" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=9165&amp;ftype=1" charelem="238" legality="rules-legal" >
               <specific name="Flavor" > Placing this bridle on your phantom steed makes it nearly impervious to damage. </specific>
               <specific name="Level" > 10 </specific>
               <specific name="Gold" > 5000 </specific>
               <specific name="Magic Item Type" > Wondrous Item </specific>
               <specific name="_Rarity" > Common </specific>
               <specific name="_Bonus" > +0 </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Property" > After performing the Phantom Steed ritual, you can place this bridle on one of the steeds created. That phantom steed gains resist 20 to all damage until the ritual ends or you remove the bridle. </specific>
            </RulesElement>
         </loot>
         <loot count="1" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Woundstitch Powder" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_7279" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=7279&amp;ftype=1" charelem="239" legality="rules-legal" >
               <specific name="Flavor" > This worn leather pouch contains a quantity of life-saving yellow powder. </specific>
               <specific name="Level" > 1 </specific>
               <specific name="Gold" > 360 </specific>
               <specific name="Magic Item Type" > Wondrous Item </specific>
               <specific name="_Rarity" > Common </specific>
               <specific name="_Bonus" > +0 </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Power" > Power *  (Standard Action)
You sprinkle this dust on an adjacent dying creature. That creature stops making death saving throws until it takes damage, and any untyped ongoing damage on the creature ends. </specific>
            </RulesElement>
         </loot>
         <loot count="1" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Eternal Chalk" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_3849" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=3849&amp;ftype=1" charelem="240" legality="rules-legal" >
               <specific name="Flavor" > The marks left by this chalk glow briefly as you scribe them, remaining in place to guide you until you choose to erase them. </specific>
               <specific name="Level" > 1 </specific>
               <specific name="Gold" > 360 </specific>
               <specific name="Magic Item Type" > Wondrous Item </specific>
               <specific name="_Rarity" > Common </specific>
               <specific name="_Bonus" > +0 </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Property" > A stick of eternal chalk never breaks or wears down with normal use. Any writing or drawing made with this chalk cannot be erased for one week by anyone except the original artist or author.
	A stick of eternal chalk can be created in any color. </specific>
            </RulesElement>
         </loot>
         <loot count="1" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Ten-foot pole" type="Gear" internal-id="ID_FMP_GEAR_160" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=160&amp;ftype=4" charelem="241" legality="rules-legal" >
               <specific name="Full Text" > Ten-foot pole
Category: Gear
Price: 1 gp 
Weight: 8 lb
Description: Prodding dangerous-looking things with a ten-foot pole lets you trigger many traps from the safety of 2 squares away. </specific>
               <specific name="Weight" > 8 </specific>
               <specific name="Gold" > 1 </specific>
               <specific name="Category" > Gear </specific>
               <specific name="count" > 1 </specific>
            Prodding dangerous-looking things with a ten-foot pole lets you trigger many traps from the safety of 2 squares away.
            </RulesElement>
         </loot>
         <loot count="1" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Mirror" type="Gear" internal-id="ID_FMP_GEAR_231" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=231&amp;ftype=4" charelem="242" legality="rules-legal" >
               <specific name="Full Text" > Mirror
Category: Gear
Price: 10 gp 
Weight: 1 lb
Description: The finest mirrors are made of silvered glass and are prohibitively costly, so most adventurers favor these less expensive handheld disks of polished metal. A mirror can let you safely look around corners without being seen, avoid the direct gaze of a medusa, or reflect light to signal distant allies (or to lure enemies). </specific>
               <specific name="Weight" > 1 </specific>
               <specific name="Gold" > 10 </specific>
               <specific name="Category" > Gear </specific>
               <specific name="count" > 1 </specific>
            The finest mirrors are made of silvered glass and are prohibitively costly, so most adventurers favor these less expensive handheld disks of polished metal. A mirror can let you safely look around corners without being seen, avoid the direct gaze of a medusa, or reflect light to signal distant allies (or to lure enemies).
            </RulesElement>
         </loot>
         <loot count="1" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Stone of Earth" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_7475" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=7475&amp;ftype=1" charelem="46" legality="rules-legal" >
               <specific name="Flavor" > This smooth brown agate is warm to the touch, and the arcane symbol for “earth” adorns it. </specific>
               <specific name="Level" > 12 </specific>
               <specific name="Gold" > 13000 </specific>
               <specific name="Magic Item Type" > Wondrous Item </specific>
               <specific name="_Item_Set_ID" > ID_FMP_ITEM_SET_34 </specific>
               <specific name="_Rarity" > Rare </specific>
               <specific name="_Bonus" > +0 </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Power" > Power * Daily (Free Action)
	Trigger: You miss an enemy with a melee weapon attack.
	Effect: Reroll the attack roll. </specific>
               <specific name="_SupportsID" > ID_FMP_ITEM_SET_34 </specific>
            </RulesElement>
         </loot>
         <loot count="0" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Foe Stone" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_3854" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=3854&amp;ftype=1" charelem="243" legality="rules-legal" >
               <specific name="Flavor" > This lodestone is set into a chain, and when aimed toward an enemy, it grants you understanding of your foes&apos; weaknesses. </specific>
               <specific name="Level" > 12 </specific>
               <specific name="Gold" > 13000 </specific>
               <specific name="Magic Item Type" > Wondrous Item </specific>
               <specific name="_Rarity" > Uncommon </specific>
               <specific name="_Bonus" > +0 </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Power" > Power *  (Minor Action)
Choose one creature you can see. You learn all the target&apos;s vulnerabilities, as well as which of its defenses is lowest. </specific>
            </RulesElement>
         </loot>
         <loot count="0" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Battle Standard of the Hungry Blade" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_8243" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=8243&amp;ftype=1" charelem="244" legality="rules-legal" >
               <specific name="Flavor" > This black pennant bears the symbol of the hungry blade: an axe head with a toothy maw that resembles the silhouette of a dragon&apos;s head. </specific>
               <specific name="Level" > 9 </specific>
               <specific name="Gold" > 4200 </specific>
               <specific name="Magic Item Type" > Wondrous Item </specific>
               <specific name="_Rarity" > Uncommon </specific>
               <specific name="_Bonus" > +0 </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Power" > Power (Zone) * Encounter (Standard Action)
When you plant this battle standard in your space or an adjacent square, it creates a zone in a close burst 3. Enemies within the zone when it is created or within the zone at the start of your turn are pulled 2 squares toward the battle standard and slowed until the start of your next turn.
The zone lasts until the end of the encounter or until the battle standard is removed from the ground. Any character in or adjacent to the battle standard&apos;s square can remove it from the ground as a standard action. If an enemy attempts to remove the standard, it provokes opportunity attacks from you and your allies. </specific>
            </RulesElement>
         </loot>
         <loot count="1" equip-count="1" ShowPowerCard="1" >
            <RulesElement name="Gauntlets of Blood (paragon tier)" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_5836" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=5836&amp;ftype=1" charelem="47" legality="rules-legal" >
               <specific name="Flavor" > The blood of wounded foes streams along the joints of these rusty-looking steel gauntlets. </specific>
               <specific name="Level" > 14 </specific>
               <specific name="Gold" > 21000 </specific>
               <specific name="Magic Item Type" > Hands Slot Item </specific>
               <specific name="Item Slot" > Hands </specific>
               <specific name="_Rarity" > Uncommon </specific>
               <specific name="_Bonus" > +0 </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="_Tags" > Essentials </specific>
               <specific name="_MagicItemTemplate" > ID_FMP_MAGIC_ITEM_TEMPLATE_147734 </specific>
               <specific name="Property" > You gain a +4 bonus to damage rolls against bloodied targets. </specific>
            </RulesElement>
         </loot>
         <loot count="1" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Cinder of Gazra (paragon tier)" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_149898.12" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=149898.12&amp;ftype=1" charelem="35" legality="rules-legal" >
               <RulesElement name="Elemental" type="Origin" internal-id="ID_INTERNAL_ORIGIN_ELEMENTAL" charelem="196" legality="rules-legal" >
               </RulesElement>
               <specific name="Flavor" > Black soot and ash covers your body when you claim this shard and enemies who subject you to force or flame do so at their peril. </specific>
               <specific name="Level" > 12 </specific>
               <specific name="Gold" > 13000 </specific>
               <specific name="Magic Item Type" > Wondrous Item </specific>
               <specific name="Item Slot" > Primordial shard </specific>
               <specific name="_Rarity" > Rare </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="_MagicItemTemplate" > ID_FMP_MAGIC_ITEM_TEMPLATE_149898 </specific>
               <specific name="Property" > Your origin changes to elemental. </specific>
               <specific name="Property" > Your origin changes to elemental. </specific>
               <specific name="Property" > Your origin changes to elemental. </specific>
               <specific name="Power" > Attack Power * At-Will (Immediate Interrupt)
Trigger: An adjacent enemy pulls, pushes, or slides you.
Effect: The triggering enemy grants combat advantage until the end of your next turn. </specific>
    <specific name="Power"> Attack Power (Fire) * Daily (Immediate Reaction Action)
Trigger: You take fire damage from an enemy attack.
Attack: Close burst 1 (enemies in the burst); the shard's level + 5 vs. Reflex
Hit: The target takes ongoing 5 fire damage (save ends).
	Level 22: Ongoing 10 fire damage.
 </specific>
 </RulesElement>
         </loot>
         <loot count="0" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Spiked gauntlet" type="Weapon" internal-id="ID_FMP_WEAPON_48" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=48&amp;ftype=3" charelem="245" legality="rules-legal" >
               <specific name="Full Text" > Spiked gauntlet
Simple one-handed melee weapon
Cost: 5 gp
Damage: 1d6
Proficient: +2
Range: -
Weight: 1 lb.

These gauntlets are specially fitted with metal spikes. Unlike other weapons, the spiked gauntlet occupies your magic item hands slot while enchanted.

Properties: 
Off-Hand (An off-hand weapon is light enough that you can hold it and attack effectively with it while holding a weapon in your main hand. You can&apos;t attack with both weapons in the same turn, unless you have a power that lets you do so, but you can attack with either weapon.).

Group: 
Unarmed (When you punch, kick, elbow, knee, or even head butt an opponent, you&apos;re making an unarmed strike. A simple unarmed attack is treated as an improvised weapon. Creatures that have natural weapons such as claws or bite attacks are proficient with those natural weapons.). </specific>
               <specific name="Weight" > 1 </specific>
               <specific name="Gold" > 5 </specific>
               <specific name="Range" />
               <specific name="Damage" > 1d6 </specific>
               <specific name="Proficiency Bonus" > 2 </specific>
               <specific name="Weapon Category" > Simple Melee </specific>
               <specific name="Hands Required" > One-Handed </specific>
               <specific name="Item Slot" > Off-Hand </specific>
               <specific name="Group" > Unarmed </specific>
               <specific name="Properties" > Off-Hand </specific>
               <specific name="Additional Slot" > Hands </specific>
            These gauntlets are specially fitted with metal spikes. Unlike other weapons, the spiked gauntlet occupies your magic item hands slot while enchanted.
            </RulesElement>
         </loot>
         <loot count="0" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Dagger" type="Weapon" internal-id="ID_FMP_WEAPON_3" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=3&amp;ftype=3" charelem="246" legality="rules-legal" >
               <specific name="Full Text" > Dagger
Simple one-handed melee weapon
Cost: 1 gp
Damage: 1d4
Proficient: +3
Range: 5/10
Weight: 1 lb.

Properties: 
Light Thrown (A basic attack with a light thrown weapon uses your Dexterity. Light thrown weapons don&apos;t deal as much damage as heavy thrown weapons, but some powers let you hurl several of them at once or in rapid succession.).
Off-Hand (An off-hand weapon is light enough that you can hold it and attack effectively with it while holding a weapon in your main hand. You can&apos;t attack with both weapons in the same turn, unless you have a power that lets you do so, but you can attack with either weapon.).

Group: 
Light blade (Light blades reward accuracy as much as force. Pinpoint attacks, lunges, and agile defenses are the strong points of these weapons.). </specific>
               <specific name="Weight" > 1 </specific>
               <specific name="Gold" > 1 </specific>
               <specific name="Range" > 5/10 </specific>
               <specific name="Damage" > 1d4 </specific>
               <specific name="Proficiency Bonus" > 3 </specific>
               <specific name="Weapon Category" > Simple Melee </specific>
               <specific name="Hands Required" > One-Handed </specific>
               <specific name="Item Slot" > Off-Hand </specific>
               <specific name="Group" > Light blade </specific>
               <specific name="Properties" > Light Thrown, Off-Hand </specific>
            </RulesElement>
         </loot>
         <loot count="1" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Short spear" type="Weapon" internal-id="ID_FMP_WEAPON_165" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=165&amp;ftype=3" charelem="247" legality="rules-legal" >
               <specific name="Full Text" > Short spear
Simple one-handed melee weapon
Cost: 2 gp
Damage: 1d6
Proficient: +2
Range: 5/10
Weight: 1 lb.

Although this weapon often serves the same role as a spear, it is more handy for the smaller races. It can also be used as a thrown weapon, unlike a full-sized spear.

Properties: 
Light Thrown (A basic attack with a light thrown weapon uses your Dexterity. Light thrown weapons don&apos;t deal as much damage as heavy thrown weapons, but some powers let you hurl several of them at once or in rapid succession.).
Off-Hand (An off-hand weapon is light enough that you can hold it and attack effectively with it while holding a weapon in your main hand. You can&apos;t attack with both weapons in the same turn, unless you have a power that lets you do so, but you can attack with either weapon.).
Small (This property describes a two-handed or a versatile weapon that a Small character can use in the same way a Medium character can. A halfling can use a shortbow, for example, even though halflings can&apos;t normally use two-handed weapons.).

Group: 
Spear (Consisting of a stabbing head on the end of a long shaft, a spear is great for lunging attacks.). </specific>
               <specific name="Weight" > 1 </specific>
               <specific name="Gold" > 2 </specific>
               <specific name="Range" > 5/10 </specific>
               <specific name="Damage" > 1d6 </specific>
               <specific name="Proficiency Bonus" > 2 </specific>
               <specific name="Weapon Category" > Simple Melee </specific>
               <specific name="Hands Required" > One-Handed </specific>
               <specific name="Item Slot" > Off-Hand </specific>
               <specific name="Group" > Spear </specific>
               <specific name="Properties" > Light Thrown, Off-Hand, Small </specific>
            Although this weapon often serves the same role as a spear, it is more handy for the smaller races. It can also be used as a thrown weapon, unlike a full-sized spear.
            </RulesElement>
            <RulesElement name="Dynamic Weapon +3" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2063" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2063&amp;ftype=1" charelem="248" legality="rules-legal" >
               <specific name="Flavor" > This weapon transforms into any other melee weapon that its wielder desires. </specific>
               <specific name="Level" > 11 </specific>
               <specific name="Gold" > 9000 </specific>
               <specific name="Magic Item Type" > Weapon </specific>
               <specific name="Critical" > +1d6 damage per plus </specific>
               <specific name="_Rarity" > Common </specific>
               <specific name="_Bonus" > +3 </specific>
               <specific name="_Enhancement" > Attack rolls and damage rolls </specific>
               <specific name="_AssociatedMonsters" />
               <specific name="Weapon" > Any melee </specific>
               <specific name="_MagicItemTemplate" > ID_FMP_MAGIC_ITEM_TEMPLATE_147508 </specific>
               <specific name="Power" > Power (Polymorph) * Encounter (Minor Action)
Change the weapon into a different weapon from any melee category (simple, military, or superior). This effect lasts until the end of the encounter, or until you end it as a minor action. </specific>
               <specific name="Enhancement" > +3 attack rolls and damage rolls </specific>
            </RulesElement>
         </loot>
         <loot count="0" equip-count="0" ShowPowerCard="1" >
            <RulesElement name="Chainmail" type="Armor" internal-id="ID_FMP_ARMOR_4" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=4&amp;ftype=2" charelem="249" legality="rules-legal" >
               <specific name="Full Text" > Chainmail
Description: Metal rings woven together into a shirt, leggings, and a hood make up a suit of chainmail. Chainmail grants good protection, but it&apos;s cumbersome, so it reduces your mobility and agility.
	Magic appears at higher item levels, and grants higher armor bonuses than its mundane counterparts. Chainmail grants +8 AC at levels 11-15, +9 AC at levels 16-20, +10 AC at levels 21-25, and +12 AC at levels 26-30.
AC Bonus: +6
Check: -1
Speed: -1
Weight: 40 lb.
Cost: 40 gp.
Type: Chainmail </specific>
               <specific name="Weight" > 40 </specific>
               <specific name="Armor Bonus" > 6 </specific>
               <specific name="Check" > -1 </specific>
               <specific name="Speed" > -1 </specific>
               <specific name="Gold" > 40 </specific>
               <specific name="_BaseACPlus1" > 6 </specific>
               <specific name="_BaseACPlus2" > 7 </specific>
               <specific name="_BaseACPlus3" > 8 </specific>
               <specific name="_BaseACPlus4" > 9 </specific>
               <specific name="_BaseACPlus5" > 10 </specific>
               <specific name="_BaseACPlus6" > 12 </specific>
               <specific name="Armor Type" > Heavy </specific>
               <specific name="Item Slot" > Body </specific>
               <specific name="Armor Category" > Chain </specific>
            Metal rings woven together into a shirt, leggings, and a hood make up a suit of chainmail. Chainmail grants good protection, but it&apos;s cumbersome, so it reduces your mobility and agility.
	Magic appears at higher item levels, and grants higher armor bonuses than its mundane counterparts. Chainmail grants +8 AC at levels 11-15, +9 AC at levels 16-20, +10 AC at levels 21-25, and +12 AC at levels 26-30.
            </RulesElement>
         </loot>
      </LootTally>

      <!--
         The fields for your powers. Each power is then followed
         by the stats with that power paired with each legal weapon.
         The weapons are listed in priority as the builder sees it.
         Particularly, the first weapon listed is the default.
      -->
      <PowerStats>
         <Power name="Melee Basic Attack" >
            <specific name="Flavor" > You resort to the simple attack you learned when you first picked up a melee weapon. </specific>
            <specific name="Power Usage" > At-Will </specific>
            <specific name="Display" > Basic Attack </specific>
            <specific name="Keywords" > Weapon </specific>
            <specific name="Action Type" > Standard Action </specific>
            <specific name="Attack Type" > Melee weapon </specific>
            <specific name="Target" > One creature </specific>
            <specific name="Attack" > Strength vs. AC </specific>
            <specific name="Hit" > 1[W] + Strength modifier damage. </specific>
            <specific name="	Level 21" > 2[W] + Strength modifier damage. </specific>
            <Weapon name="Withering Greatspear +4" >
               <RulesElement name="Greatspear" type="Weapon" internal-id="ID_FMP_WEAPON_64" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=64&amp;ftype=3" charelem="223" legality="rules-legal" />
               <RulesElement name="Withering Weapon +4" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2477" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2477&amp;ftype=1" charelem="224" legality="rules-legal" />
               <AttackBonus> 21 </AttackBonus>
               <Damage> 1d10+13 </Damage>
               <AttackStat> Strength </AttackStat>
               <Defense> AC </Defense>
               <HitComponents> +5 Strength modifier.
+6 half your level.
+3 proficiency bonus.
+4 enhancement bonus.
+1 bonus - Two-handed Weapon Talent
+2 Feat bonus - Spear Expertise

               </HitComponents>
               <DamageComponents> +5 Strength modifier.
+4 enhancement bonus.
+4 item bonus - Iron Armbands of Power (paragon tier)

               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.
+2 to damage rolls when charging - Spear Expertise.
+4 to damage rolls against bloodied targets - Gauntlets of Blood (paragon tier).               </Conditions>
               <CritDamage> 23+4d6 </CritDamage>
               <CritComponents> +4d6 weapon critical bonus.
               </CritComponents>
               <CritRange> 20 </CritRange>
            </Weapon>
            <Weapon name="Dynamic Short spear +3" >
               <RulesElement name="Short spear" type="Weapon" internal-id="ID_FMP_WEAPON_165" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=165&amp;ftype=3" charelem="247" legality="rules-legal" />
               <RulesElement name="Dynamic Weapon +3" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2063" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2063&amp;ftype=1" charelem="248" legality="rules-legal" />
               <AttackBonus> 18 </AttackBonus>
               <Damage> 1d6+12 </Damage>
               <AttackStat> Strength </AttackStat>
               <Defense> AC </Defense>
               <HitComponents> +5 Strength modifier.
+6 half your level.
+2 proficiency bonus.
+3 enhancement bonus.
+2 Feat bonus - Spear Expertise

               </HitComponents>
               <DamageComponents> +5 Strength modifier.
+3 enhancement bonus.
+4 item bonus - Iron Armbands of Power (paragon tier)

               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.
+2 to damage rolls when charging - Spear Expertise.
+4 to damage rolls against bloodied targets - Gauntlets of Blood (paragon tier).               </Conditions>
               <CritDamage> 18+3d6 </CritDamage>
               <CritComponents> +3d6 weapon critical bonus.
               </CritComponents>
               <CritRange> 20 </CritRange>
            </Weapon>
            <Weapon name="Unarmed" >
               <AttackBonus> 11 </AttackBonus>
               <Damage> 1d4+9 </Damage>
               <AttackStat> Strength </AttackStat>
               <Defense> AC </Defense>
               <HitComponents> +5 Strength modifier.
+6 half your level.

               </HitComponents>
               <DamageComponents> +5 Strength modifier.
+4 item bonus - Iron Armbands of Power (paragon tier)

               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.
+4 to damage rolls against bloodied targets - Gauntlets of Blood (paragon tier).               </Conditions>
               <CritDamage> 13 </CritDamage>
               <CritRange> 20 </CritRange>
            </Weapon>
         </Power>

         <Power name="Ranged Basic Attack" >
            <specific name="Flavor" > You resort to the simple attack you learned when you first picked up a ranged weapon. </specific>
            <specific name="Power Usage" > At-Will </specific>
            <specific name="Display" > Basic Attack </specific>
            <specific name="Keywords" > Weapon </specific>
            <specific name="Action Type" > Standard Action </specific>
            <specific name="Attack Type" > Ranged weapon </specific>
            <specific name="Target" > One creature </specific>
            <specific name="Attack" > Dexterity vs. AC </specific>
            <specific name="Hit" > 1[W] + Dexterity modifier damage. </specific>
            <specific name="	Level 21" > 2[W] + Dexterity modifier damage. </specific>
            <Weapon name="Dynamic Short spear +3" >
               <RulesElement name="Short spear" type="Weapon" internal-id="ID_FMP_WEAPON_165" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=165&amp;ftype=3" charelem="247" legality="rules-legal" />
               <RulesElement name="Dynamic Weapon +3" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2063" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2063&amp;ftype=1" charelem="248" legality="rules-legal" />
               <AttackBonus> 16 </AttackBonus>
               <Damage> 1d6+6 </Damage>
               <AttackStat> Dexterity </AttackStat>
               <Defense> AC </Defense>
               <HitComponents> +3 Dexterity modifier.
+6 half your level.
+2 proficiency bonus.
+3 enhancement bonus.
+2 Feat bonus - Spear Expertise

               </HitComponents>
               <DamageComponents> +3 Dexterity modifier.
+3 enhancement bonus.

               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.
+2 to damage rolls when charging - Spear Expertise.
+4 to damage rolls against bloodied targets - Gauntlets of Blood (paragon tier).               </Conditions>
               <CritDamage> 12+3d6 </CritDamage>
               <CritComponents> +3d6 weapon critical bonus.
               </CritComponents>
               <CritRange> 20 </CritRange>
            </Weapon>
            <Weapon name="Distance Longbow +1" >
               <RulesElement name="Longbow" type="Weapon" internal-id="ID_FMP_WEAPON_40" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=40&amp;ftype=3" charelem="236" legality="rules-legal" />
               <RulesElement name="Distance Weapon +1" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2051" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2051&amp;ftype=1" charelem="237" legality="rules-legal" />
               <AttackBonus> 13 </AttackBonus>
               <Damage> 1d10+4 </Damage>
               <AttackStat> Dexterity </AttackStat>
               <Defense> AC </Defense>
               <HitComponents> +3 Dexterity modifier.
+6 half your level.
+2 proficiency bonus.
+1 enhancement bonus.
+1 bonus - Two-handed Weapon Talent

               </HitComponents>
               <DamageComponents> +3 Dexterity modifier.
+1 enhancement bonus.

               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.
+4 to damage rolls against bloodied targets - Gauntlets of Blood (paragon tier).               </Conditions>
               <CritDamage> 14None </CritDamage>
               <CritComponents> None weapon critical bonus.
               </CritComponents>
               <CritRange> 20 </CritRange>
            </Weapon>
            <Weapon name="Unarmed" >
               <AttackBonus> 9 </AttackBonus>
               <Damage> 1d4+3 </Damage>
               <AttackStat> Dexterity </AttackStat>
               <Defense> AC </Defense>
               <HitComponents> +3 Dexterity modifier.
+6 half your level.

               </HitComponents>
               <DamageComponents> +3 Dexterity modifier.

               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.
+4 to damage rolls against bloodied targets - Gauntlets of Blood (paragon tier).               </Conditions>
               <CritDamage> 7 </CritDamage>
               <CritRange> 20 </CritRange>
            </Weapon>
         </Power>

         <Power name="Longtooth Shifting" >
            <specific name="Flavor" > You unleash the beast within and take on a savage countenance. </specific>
            <specific name="Power Usage" > Encounter </specific>
            <specific name="Display" > Longtooth Shifter Racial Power </specific>
            <specific name="Keywords" > Healing </specific>
            <specific name="Action Type" > Minor Action </specific>
            <specific name="Attack Type" > Personal </specific>
            <specific name="Requirement" > You must be bloodied. </specific>
            <specific name="Effect" > Until the end of the encounter, you gain a +2 bonus to damage rolls. In addition, while you are bloodied, you gain regeneration 2.
Level 11: Regeneration 4.
Level 21: Regeneration 6. </specific>
            <specific name="_ParentFeature" > ID_FMP_RACIAL_TRAIT_429 </specific>
            <specific name="Class" > ID_FMP_RACE_27 </specific>
            <Weapon name="Unarmed" >
               <AttackBonus> 6 </AttackBonus>
               <Damage>  </Damage>
               <AttackStat>  </AttackStat>
               <Defense> unknown </Defense>
               <HitComponents> +6 half your level.

               </HitComponents>
               <DamageComponents> 
               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.               </Conditions>
               <CritDamage> 0 </CritDamage>
               <CritRange> 20 </CritRange>
            </Weapon>
         </Power>

         <Power name="Combat Challenge" >
            <specific name="Power Usage" > At-Will </specific>
            <specific name="Display" > Fighter Attack </specific>
            <specific name="Keywords" > Martial, Weapon </specific>
            <specific name="Action Type" > Immediate Interrupt </specific>
            <specific name="Attack Type" > Melee </specific>
            <specific name="Effect" > Whenever an enemy marked by you is adjacent to you and shifts or makes an attack that does not include you as a target, you can make a melee basic attack against that enemy. </specific>
            <specific name="Class" > ID_FMP_CLASS_3 </specific>
            <specific name="Level" />
            <specific name="Power Type" > Attack </specific>
            <specific name="_ParentFeature" > ID_FMP_CLASS_FEATURE_54,ID_FMP_CLASS_FEATURE_1528 </specific>
         </Power>

         <Power name="Cleave" >
            <specific name="Flavor" > You hit one enemy, then cleave into another. </specific>
            <specific name="Power Usage" > At-Will </specific>
            <specific name="Display" > Fighter Attack 1 </specific>
            <specific name="Keywords" > Martial, Weapon </specific>
            <specific name="Action Type" > Standard Action </specific>
            <specific name="Attack Type" > Melee weapon </specific>
            <specific name="Targets" > One creature </specific>
            <specific name="Attack" > Strength vs. AC </specific>
            <specific name="Hit" > 1[W] + Strength modifier damage, and an enemy adjacent to you other than the target takes damage equal to your Strength modifier.
	Level 21: 2[W] + Strength modifier damage. </specific>
            <specific name="Class" > ID_FMP_CLASS_3 </specific>
            <specific name="Level" > 1 </specific>
            <specific name="Power Type" > Attack </specific>
            <specific name="_Associated Feats" > ID_FMP_FEAT_977, ID_FMP_FEAT_987, ID_FMP_FEAT_993, ID_FMP_FEAT_2356, ID_FMP_FEAT_2714, ID_FMP_FEAT_3188 </specific>
            <Weapon name="Withering Greatspear +4" >
               <RulesElement name="Greatspear" type="Weapon" internal-id="ID_FMP_WEAPON_64" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=64&amp;ftype=3" charelem="223" legality="rules-legal" />
               <RulesElement name="Withering Weapon +4" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2477" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2477&amp;ftype=1" charelem="224" legality="rules-legal" />
               <AttackBonus> 21 </AttackBonus>
               <Damage> 1d10+13 </Damage>
               <AttackStat> Strength </AttackStat>
               <Defense> AC </Defense>
               <HitComponents> +5 Strength modifier.
+6 half your level.
+3 proficiency bonus.
+4 enhancement bonus.
+1 bonus - Two-handed Weapon Talent
+2 Feat bonus - Spear Expertise

               </HitComponents>
               <DamageComponents> +5 Strength modifier.
+4 enhancement bonus.
+4 item bonus - Iron Armbands of Power (paragon tier)

               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.
+2 to damage rolls when charging - Spear Expertise.
+4 to damage rolls against bloodied targets - Gauntlets of Blood (paragon tier).               </Conditions>
               <CritDamage> 23+4d6 </CritDamage>
               <CritComponents> +4d6 weapon critical bonus.
               </CritComponents>
               <CritRange> 20 </CritRange>
            </Weapon>
            <Weapon name="Dynamic Short spear +3" >
               <RulesElement name="Short spear" type="Weapon" internal-id="ID_FMP_WEAPON_165" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=165&amp;ftype=3" charelem="247" legality="rules-legal" />
               <RulesElement name="Dynamic Weapon +3" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2063" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2063&amp;ftype=1" charelem="248" legality="rules-legal" />
               <AttackBonus> 18 </AttackBonus>
               <Damage> 1d6+12 </Damage>
               <AttackStat> Strength </AttackStat>
               <Defense> AC </Defense>
               <HitComponents> +5 Strength modifier.
+6 half your level.
+2 proficiency bonus.
+3 enhancement bonus.
+2 Feat bonus - Spear Expertise

               </HitComponents>
               <DamageComponents> +5 Strength modifier.
+3 enhancement bonus.
+4 item bonus - Iron Armbands of Power (paragon tier)

               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.
+2 to damage rolls when charging - Spear Expertise.
+4 to damage rolls against bloodied targets - Gauntlets of Blood (paragon tier).               </Conditions>
               <CritDamage> 18+3d6 </CritDamage>
               <CritComponents> +3d6 weapon critical bonus.
               </CritComponents>
               <CritRange> 20 </CritRange>
            </Weapon>
            <Weapon name="Unarmed" >
               <AttackBonus> 11 </AttackBonus>
               <Damage> 1d4+9 </Damage>
               <AttackStat> Strength </AttackStat>
               <Defense> AC </Defense>
               <HitComponents> +5 Strength modifier.
+6 half your level.

               </HitComponents>
               <DamageComponents> +5 Strength modifier.
+4 item bonus - Iron Armbands of Power (paragon tier)

               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.
+4 to damage rolls against bloodied targets - Gauntlets of Blood (paragon tier).               </Conditions>
               <CritDamage> 13 </CritDamage>
               <CritRange> 20 </CritRange>
            </Weapon>
         </Power>

         <Power name="Hack and Hew" >
            <specific name="Flavor" > You hack an enemy with one stroke and then slash at another with your next swing. </specific>
            <specific name="Power Usage" > Encounter </specific>
            <specific name="Display" > Fighter Attack 1 </specific>
            <specific name="Keywords" > Invigorating, Martial, Weapon </specific>
            <specific name="Action Type" > Standard Action </specific>
            <specific name="Attack Type" > Melee weapon </specific>
            <specific name="Primary Target" > One creature </specific>
            <specific name="Primary Attack" > Strength vs. AC </specific>
            <specific name="Hit" > 1[W] + Strength modifier damage. </specific>
            <specific name="Effect" > Make a secondary attack. </specific>
            <specific name="	Secondary Target" > One creature other than the primary target </specific>
            <specific name="	Secondary Attack" > Strength vs. AC </specific>
            <specific name="	Hit" > 1[W] + Strength modifier damage. </specific>
            <specific name="Class" > ID_FMP_CLASS_3 </specific>
            <specific name="Level" > 1 </specific>
            <specific name="Power Type" > Attack </specific>
            <Weapon name="Withering Greatspear +4" >
               <RulesElement name="Greatspear" type="Weapon" internal-id="ID_FMP_WEAPON_64" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=64&amp;ftype=3" charelem="223" legality="rules-legal" />
               <RulesElement name="Withering Weapon +4" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2477" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2477&amp;ftype=1" charelem="224" legality="rules-legal" />
               <AttackBonus> 21 </AttackBonus>
               <Damage> 1d10+13 </Damage>
               <AttackStat> Strength </AttackStat>
               <Defense> AC </Defense>
               <HitComponents> +5 Strength modifier.
+6 half your level.
+3 proficiency bonus.
+4 enhancement bonus.
+1 bonus - Two-handed Weapon Talent
+2 Feat bonus - Spear Expertise

               </HitComponents>
               <DamageComponents> +5 Strength modifier.
+4 enhancement bonus.
+4 item bonus - Iron Armbands of Power (paragon tier)

               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.
+2 to damage rolls when charging - Spear Expertise.
+4 to damage rolls against bloodied targets - Gauntlets of Blood (paragon tier).               </Conditions>
               <CritDamage> 23+4d6 </CritDamage>
               <CritComponents> +4d6 weapon critical bonus.
               </CritComponents>
               <CritRange> 20 </CritRange>
            </Weapon>
            <Weapon name="Dynamic Short spear +3" >
               <RulesElement name="Short spear" type="Weapon" internal-id="ID_FMP_WEAPON_165" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=165&amp;ftype=3" charelem="247" legality="rules-legal" />
               <RulesElement name="Dynamic Weapon +3" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2063" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2063&amp;ftype=1" charelem="248" legality="rules-legal" />
               <AttackBonus> 18 </AttackBonus>
               <Damage> 1d6+12 </Damage>
               <AttackStat> Strength </AttackStat>
               <Defense> AC </Defense>
               <HitComponents> +5 Strength modifier.
+6 half your level.
+2 proficiency bonus.
+3 enhancement bonus.
+2 Feat bonus - Spear Expertise

               </HitComponents>
               <DamageComponents> +5 Strength modifier.
+3 enhancement bonus.
+4 item bonus - Iron Armbands of Power (paragon tier)

               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.
+2 to damage rolls when charging - Spear Expertise.
+4 to damage rolls against bloodied targets - Gauntlets of Blood (paragon tier).               </Conditions>
               <CritDamage> 18+3d6 </CritDamage>
               <CritComponents> +3d6 weapon critical bonus.
               </CritComponents>
               <CritRange> 20 </CritRange>
            </Weapon>
            <Weapon name="Unarmed" >
               <AttackBonus> 11 </AttackBonus>
               <Damage> 1d4+9 </Damage>
               <AttackStat> Strength </AttackStat>
               <Defense> AC </Defense>
               <HitComponents> +5 Strength modifier.
+6 half your level.

               </HitComponents>
               <DamageComponents> +5 Strength modifier.
+4 item bonus - Iron Armbands of Power (paragon tier)

               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.
+4 to damage rolls against bloodied targets - Gauntlets of Blood (paragon tier).               </Conditions>
               <CritDamage> 13 </CritDamage>
               <CritRange> 20 </CritRange>
            </Weapon>
         </Power>

         <Power name="Tempest Dance" >
            <specific name="Flavor" > You lunge from enemy to enemy, giving each a taste of your weapon as you pass. </specific>
            <specific name="Power Usage" > Daily </specific>
            <specific name="Display" > Fighter Attack 1 </specific>
            <specific name="Keywords" > Martial, Weapon </specific>
            <specific name="Action Type" > Standard Action </specific>
            <specific name="Attack Type" > Melee weapon </specific>
            <specific name="Target" > One creature </specific>
            <specific name="Attack" > Strength vs. AC </specific>
            <specific name="Hit" > 1[W] + Strength modifier damage. If you have combat advantage against the target, the attack deals extra damage equal to your Dexterity modifier. </specific>
            <specific name="Effect" > You can shift 1 square and repeat the attack against a second target. You can then shift 1 square and repeat the attack against a third target. </specific>
            <specific name="Class" > ID_FMP_CLASS_3 </specific>
            <specific name="Level" > 1 </specific>
            <specific name="Power Type" > Attack </specific>
            <Weapon name="Withering Greatspear +4" >
               <RulesElement name="Greatspear" type="Weapon" internal-id="ID_FMP_WEAPON_64" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=64&amp;ftype=3" charelem="223" legality="rules-legal" />
               <RulesElement name="Withering Weapon +4" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2477" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2477&amp;ftype=1" charelem="224" legality="rules-legal" />
               <AttackBonus> 21 </AttackBonus>
               <Damage> 1d10+13 </Damage>
               <AttackStat> Strength </AttackStat>
               <Defense> AC </Defense>
               <HitComponents> +5 Strength modifier.
+6 half your level.
+3 proficiency bonus.
+4 enhancement bonus.
+1 bonus - Two-handed Weapon Talent
+2 Feat bonus - Spear Expertise

               </HitComponents>
               <DamageComponents> +5 Strength modifier.
+4 enhancement bonus.
+4 item bonus - Iron Armbands of Power (paragon tier)

               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.
+2 to damage rolls when charging - Spear Expertise.
+4 to damage rolls against bloodied targets - Gauntlets of Blood (paragon tier).               </Conditions>
               <CritDamage> 23+4d6 </CritDamage>
               <CritComponents> +4d6 weapon critical bonus.
               </CritComponents>
               <CritRange> 20 </CritRange>
            </Weapon>
            <Weapon name="Dynamic Short spear +3" >
               <RulesElement name="Short spear" type="Weapon" internal-id="ID_FMP_WEAPON_165" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=165&amp;ftype=3" charelem="247" legality="rules-legal" />
               <RulesElement name="Dynamic Weapon +3" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2063" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2063&amp;ftype=1" charelem="248" legality="rules-legal" />
               <AttackBonus> 18 </AttackBonus>
               <Damage> 1d6+12 </Damage>
               <AttackStat> Strength </AttackStat>
               <Defense> AC </Defense>
               <HitComponents> +5 Strength modifier.
+6 half your level.
+2 proficiency bonus.
+3 enhancement bonus.
+2 Feat bonus - Spear Expertise

               </HitComponents>
               <DamageComponents> +5 Strength modifier.
+3 enhancement bonus.
+4 item bonus - Iron Armbands of Power (paragon tier)

               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.
+2 to damage rolls when charging - Spear Expertise.
+4 to damage rolls against bloodied targets - Gauntlets of Blood (paragon tier).               </Conditions>
               <CritDamage> 18+3d6 </CritDamage>
               <CritComponents> +3d6 weapon critical bonus.
               </CritComponents>
               <CritRange> 20 </CritRange>
            </Weapon>
            <Weapon name="Unarmed" >
               <AttackBonus> 11 </AttackBonus>
               <Damage> 1d4+9 </Damage>
               <AttackStat> Strength </AttackStat>
               <Defense> AC </Defense>
               <HitComponents> +5 Strength modifier.
+6 half your level.

               </HitComponents>
               <DamageComponents> +5 Strength modifier.
+4 item bonus - Iron Armbands of Power (paragon tier)

               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.
+4 to damage rolls against bloodied targets - Gauntlets of Blood (paragon tier).               </Conditions>
               <CritDamage> 13 </CritDamage>
               <CritRange> 20 </CritRange>
            </Weapon>
         </Power>

         <Power name="Pass Forward" >
            <specific name="Flavor" > With perfect timing, you slip by your foe without dropping your guard. </specific>
            <specific name="Power Usage" > At-Will </specific>
            <specific name="Display" > Fighter Utility 2 </specific>
            <specific name="Keywords" > Martial </specific>
            <specific name="Action Type" > Move Action </specific>
            <specific name="Attack Type" > Personal </specific>
            <specific name="Effect" > You pick an adjacent enemy and move up to your speed. As long as you end this movement in a square adjacent to that enemy, your movement does not provoke opportunity attacks from that enemy. </specific>
            <specific name="Class" > ID_FMP_CLASS_3 </specific>
            <specific name="Level" > 2 </specific>
            <specific name="Power Type" > Utility </specific>
         </Power>

         <Power name="Rain of Blows" >
            <specific name="Flavor" > You become a blur of motion, raining a series of blows upon your opponent. </specific>
            <specific name="Power Usage" > Encounter </specific>
            <specific name="Display" > Fighter Attack 3 </specific>
            <specific name="Keywords" > Martial, Weapon </specific>
            <specific name="Action Type" > Standard Action </specific>
            <specific name="Attack Type" > Melee weapon </specific>
            <specific name="Target" > One creature </specific>
            <specific name="Attack" > Strength vs. AC. Make the attack twice against the target. </specific>
            <specific name="Hit" > 1[W] damage. </specific>
            <specific name="Weapon" > If you&apos;re wielding a flail, a light blade, or a spear and have Dexterity 15 or higher, make the attack a third time against either the target or a different creature. </specific>
            <specific name="Class" > ID_FMP_CLASS_3 </specific>
            <specific name="Level" > 3 </specific>
            <specific name="Power Type" > Attack </specific>
            <Weapon name="Withering Greatspear +4" >
               <RulesElement name="Greatspear" type="Weapon" internal-id="ID_FMP_WEAPON_64" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=64&amp;ftype=3" charelem="223" legality="rules-legal" />
               <RulesElement name="Withering Weapon +4" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2477" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2477&amp;ftype=1" charelem="224" legality="rules-legal" />
               <AttackBonus> 21 </AttackBonus>
               <Damage> 1d10+8 </Damage>
               <AttackStat> Strength </AttackStat>
               <Defense> AC </Defense>
               <HitComponents> +5 Strength modifier.
+6 half your level.
+3 proficiency bonus.
+4 enhancement bonus.
+1 bonus - Two-handed Weapon Talent
+2 Feat bonus - Spear Expertise

               </HitComponents>
               <DamageComponents> +4 enhancement bonus.
+4 item bonus - Iron Armbands of Power (paragon tier)

               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.
+2 to damage rolls when charging - Spear Expertise.
+4 to damage rolls against bloodied targets - Gauntlets of Blood (paragon tier).               </Conditions>
               <CritDamage> 18+4d6 </CritDamage>
               <CritComponents> +4d6 weapon critical bonus.
               </CritComponents>
               <CritRange> 20 </CritRange>
            </Weapon>
            <Weapon name="Dynamic Short spear +3" >
               <RulesElement name="Short spear" type="Weapon" internal-id="ID_FMP_WEAPON_165" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=165&amp;ftype=3" charelem="247" legality="rules-legal" />
               <RulesElement name="Dynamic Weapon +3" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2063" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2063&amp;ftype=1" charelem="248" legality="rules-legal" />
               <AttackBonus> 18 </AttackBonus>
               <Damage> 1d6+7 </Damage>
               <AttackStat> Strength </AttackStat>
               <Defense> AC </Defense>
               <HitComponents> +5 Strength modifier.
+6 half your level.
+2 proficiency bonus.
+3 enhancement bonus.
+2 Feat bonus - Spear Expertise

               </HitComponents>
               <DamageComponents> +3 enhancement bonus.
+4 item bonus - Iron Armbands of Power (paragon tier)

               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.
+2 to damage rolls when charging - Spear Expertise.
+4 to damage rolls against bloodied targets - Gauntlets of Blood (paragon tier).               </Conditions>
               <CritDamage> 13+3d6 </CritDamage>
               <CritComponents> +3d6 weapon critical bonus.
               </CritComponents>
               <CritRange> 20 </CritRange>
            </Weapon>
            <Weapon name="Unarmed" >
               <AttackBonus> 11 </AttackBonus>
               <Damage> 1d4+4 </Damage>
               <AttackStat> Strength </AttackStat>
               <Defense> AC </Defense>
               <HitComponents> +5 Strength modifier.
+6 half your level.

               </HitComponents>
               <DamageComponents> +4 item bonus - Iron Armbands of Power (paragon tier)

               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.
+4 to damage rolls against bloodied targets - Gauntlets of Blood (paragon tier).               </Conditions>
               <CritDamage> 8 </CritDamage>
               <CritRange> 20 </CritRange>
            </Weapon>
         </Power>

         <Power name="Rain of Steel" >
            <specific name="Flavor" > You constantly swing your weapon about, slashing and cutting into nearby enemies. </specific>
            <specific name="Power Usage" > Daily </specific>
            <specific name="Display" > Fighter Attack 5 </specific>
            <specific name="Keywords" > Martial, Stance, Weapon </specific>
            <specific name="Action Type" > Minor Action </specific>
            <specific name="Attack Type" > Personal </specific>
            <specific name="Effect" > You assume the rain of steel stance. Until the stance ends, any enemy that starts its turn adjacent to you takes 1[W] damage, but only if you&apos;re able to make opportunity attacks. </specific>
            <specific name="Class" > ID_FMP_CLASS_3 </specific>
            <specific name="Level" > 5 </specific>
            <specific name="Power Type" > Attack </specific>
         </Power>

         <Power name="Kirre&apos;s Roar" >
            <specific name="Flavor" > You let out an explosive roar, diverting your enemies&apos; attentions to you. The call steels you against the imminent assault. </specific>
            <specific name="Power Usage" > Encounter </specific>
            <specific name="Display" > Fighter Utility 6 </specific>
            <specific name="Keywords" > Martial </specific>
            <specific name="Action Type" > Minor Action </specific>
            <specific name="Attack Type" > Close burst 3 </specific>
            <specific name="Target" > Each enemy in the burst </specific>
            <specific name="Effect" > You mark each target until the end of your next turn. In addition, you gain resistance to all damage equal to your Dexterity modifier until the end of your next turn. </specific>
            <specific name="Class" > ID_FMP_CLASS_3 </specific>
            <specific name="Level" > 6 </specific>
            <specific name="Power Type" > Utility </specific>
         </Power>

         <Power name="Come and Get It" >
            <specific name="Flavor" > You brandish your weapon and call out to your foes, luring them close through their overconfidence, and then deliver a spinning strike against them all. </specific>
            <specific name="Power Usage" > Encounter </specific>
            <specific name="Display" > Fighter Attack 7 </specific>
            <specific name="Keywords" > Martial, Weapon </specific>
            <specific name="Action Type" > Standard Action </specific>
            <specific name="Attack Type" > Close burst 3 </specific>
            <specific name="Target" > Each enemy you can see in the burst </specific>
            <specific name="Attack" > Strength vs. Will </specific>
            <specific name="Hit" > You pull the target up to 2 squares, but only if it can end the pull adjacent to you. If the target is adjacent to you after the pull, it takes 1[W] damage. </specific>
            <specific name="Class" > ID_FMP_CLASS_3 </specific>
            <specific name="Level" > 7 </specific>
            <specific name="Power Type" > Attack </specific>
            <Weapon name="Withering Greatspear +4" >
               <RulesElement name="Greatspear" type="Weapon" internal-id="ID_FMP_WEAPON_64" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=64&amp;ftype=3" charelem="223" legality="rules-legal" />
               <RulesElement name="Withering Weapon +4" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2477" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2477&amp;ftype=1" charelem="224" legality="rules-legal" />
               <AttackBonus> 21 </AttackBonus>
               <Damage>  </Damage>
               <AttackStat> Strength </AttackStat>
               <Defense> Will </Defense>
               <HitComponents> +5 Strength modifier.
+6 half your level.
+3 proficiency bonus.
+4 enhancement bonus.
+1 bonus - Two-handed Weapon Talent
+2 Feat bonus - Spear Expertise

               </HitComponents>
               <DamageComponents> 
               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.               </Conditions>
               <CritDamage> 0+4d6 </CritDamage>
               <CritComponents> +4d6 weapon critical bonus.
               </CritComponents>
               <CritRange> 20 </CritRange>
            </Weapon>
            <Weapon name="Dynamic Short spear +3" >
               <RulesElement name="Short spear" type="Weapon" internal-id="ID_FMP_WEAPON_165" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=165&amp;ftype=3" charelem="247" legality="rules-legal" />
               <RulesElement name="Dynamic Weapon +3" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2063" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2063&amp;ftype=1" charelem="248" legality="rules-legal" />
               <AttackBonus> 18 </AttackBonus>
               <Damage>  </Damage>
               <AttackStat> Strength </AttackStat>
               <Defense> Will </Defense>
               <HitComponents> +5 Strength modifier.
+6 half your level.
+2 proficiency bonus.
+3 enhancement bonus.
+2 Feat bonus - Spear Expertise

               </HitComponents>
               <DamageComponents> 
               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.               </Conditions>
               <CritDamage> 0+3d6 </CritDamage>
               <CritComponents> +3d6 weapon critical bonus.
               </CritComponents>
               <CritRange> 20 </CritRange>
            </Weapon>
            <Weapon name="Distance Longbow +1" >
               <RulesElement name="Longbow" type="Weapon" internal-id="ID_FMP_WEAPON_40" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=40&amp;ftype=3" charelem="236" legality="rules-legal" />
               <RulesElement name="Distance Weapon +1" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2051" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2051&amp;ftype=1" charelem="237" legality="rules-legal" />
               <AttackBonus> 15 </AttackBonus>
               <Damage>  </Damage>
               <AttackStat> Strength </AttackStat>
               <Defense> Will </Defense>
               <HitComponents> +5 Strength modifier.
+6 half your level.
+2 proficiency bonus.
+1 enhancement bonus.
+1 bonus - Two-handed Weapon Talent

               </HitComponents>
               <DamageComponents> 
               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.               </Conditions>
               <CritDamage> 0None </CritDamage>
               <CritComponents> None weapon critical bonus.
               </CritComponents>
               <CritRange> 20 </CritRange>
            </Weapon>
            <Weapon name="Unarmed" >
               <AttackBonus> 11 </AttackBonus>
               <Damage>  </Damage>
               <AttackStat> Strength </AttackStat>
               <Defense> Will </Defense>
               <HitComponents> +5 Strength modifier.
+6 half your level.

               </HitComponents>
               <DamageComponents> 
               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.               </Conditions>
               <CritDamage> 0 </CritDamage>
               <CritRange> 20 </CritRange>
            </Weapon>
         </Power>

         <Power name="Shift the Battlefield" >
            <specific name="Flavor" > With supreme skill and great resolve, you maneuver your enemies where you want them. </specific>
            <specific name="Power Usage" > Daily </specific>
            <specific name="Display" > Fighter Attack 9 </specific>
            <specific name="Keywords" > Martial, Weapon </specific>
            <specific name="Action Type" > Standard Action </specific>
            <specific name="Attack Type" > Close burst 1 </specific>
            <specific name="Targets" > Each enemy you can see in the burst </specific>
            <specific name="Attack" > Strength vs. AC </specific>
            <specific name="Hit" > 2[W] + Strength modifier damage, and you can slide the target 1 square. </specific>
            <specific name="Miss" > Half damage. </specific>
            <specific name="Class" > ID_FMP_CLASS_3 </specific>
            <specific name="Level" > 9 </specific>
            <specific name="Power Type" > Attack </specific>
            <Weapon name="Withering Greatspear +4" >
               <RulesElement name="Greatspear" type="Weapon" internal-id="ID_FMP_WEAPON_64" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=64&amp;ftype=3" charelem="223" legality="rules-legal" />
               <RulesElement name="Withering Weapon +4" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2477" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2477&amp;ftype=1" charelem="224" legality="rules-legal" />
               <AttackBonus> 21 </AttackBonus>
               <Damage> 2d10+9 </Damage>
               <AttackStat> Strength </AttackStat>
               <Defense> AC </Defense>
               <HitComponents> +5 Strength modifier.
+6 half your level.
+3 proficiency bonus.
+4 enhancement bonus.
+1 bonus - Two-handed Weapon Talent
+2 Feat bonus - Spear Expertise

               </HitComponents>
               <DamageComponents> +5 Strength modifier.
+4 enhancement bonus.

               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.
+2 to damage rolls when charging - Spear Expertise.
+4 to damage rolls against bloodied targets - Gauntlets of Blood (paragon tier).               </Conditions>
               <CritDamage> 29+4d6 </CritDamage>
               <CritComponents> +4d6 weapon critical bonus.
               </CritComponents>
               <CritRange> 20 </CritRange>
            </Weapon>
            <Weapon name="Dynamic Short spear +3" >
               <RulesElement name="Short spear" type="Weapon" internal-id="ID_FMP_WEAPON_165" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=165&amp;ftype=3" charelem="247" legality="rules-legal" />
               <RulesElement name="Dynamic Weapon +3" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2063" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2063&amp;ftype=1" charelem="248" legality="rules-legal" />
               <AttackBonus> 18 </AttackBonus>
               <Damage> 2d6+8 </Damage>
               <AttackStat> Strength </AttackStat>
               <Defense> AC </Defense>
               <HitComponents> +5 Strength modifier.
+6 half your level.
+2 proficiency bonus.
+3 enhancement bonus.
+2 Feat bonus - Spear Expertise

               </HitComponents>
               <DamageComponents> +5 Strength modifier.
+3 enhancement bonus.

               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.
+2 to damage rolls when charging - Spear Expertise.
+4 to damage rolls against bloodied targets - Gauntlets of Blood (paragon tier).               </Conditions>
               <CritDamage> 20+3d6 </CritDamage>
               <CritComponents> +3d6 weapon critical bonus.
               </CritComponents>
               <CritRange> 20 </CritRange>
            </Weapon>
            <Weapon name="Distance Longbow +1" >
               <RulesElement name="Longbow" type="Weapon" internal-id="ID_FMP_WEAPON_40" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=40&amp;ftype=3" charelem="236" legality="rules-legal" />
               <RulesElement name="Distance Weapon +1" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2051" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2051&amp;ftype=1" charelem="237" legality="rules-legal" />
               <AttackBonus> 15 </AttackBonus>
               <Damage> 2d10+6 </Damage>
               <AttackStat> Strength </AttackStat>
               <Defense> AC </Defense>
               <HitComponents> +5 Strength modifier.
+6 half your level.
+2 proficiency bonus.
+1 enhancement bonus.
+1 bonus - Two-handed Weapon Talent

               </HitComponents>
               <DamageComponents> +5 Strength modifier.
+1 enhancement bonus.

               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.
+4 to damage rolls against bloodied targets - Gauntlets of Blood (paragon tier).               </Conditions>
               <CritDamage> 26None </CritDamage>
               <CritComponents> None weapon critical bonus.
               </CritComponents>
               <CritRange> 20 </CritRange>
            </Weapon>
            <Weapon name="Unarmed" >
               <AttackBonus> 11 </AttackBonus>
               <Damage> 2d4+5 </Damage>
               <AttackStat> Strength </AttackStat>
               <Defense> AC </Defense>
               <HitComponents> +5 Strength modifier.
+6 half your level.

               </HitComponents>
               <DamageComponents> +5 Strength modifier.

               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.
+4 to damage rolls against bloodied targets - Gauntlets of Blood (paragon tier).               </Conditions>
               <CritDamage> 13 </CritDamage>
               <CritRange> 20 </CritRange>
            </Weapon>
         </Power>

         <Power name="Clearheaded" >
            <specific name="Flavor" > Your mental resilience and training let you shake off an effect that hinders you. </specific>
            <specific name="Power Usage" > Encounter </specific>
            <specific name="Display" > Fighter Utility 10 </specific>
            <specific name="Keywords" > Martial </specific>
            <specific name="Action Type" > No Action </specific>
            <specific name="Attack Type" > Personal </specific>
            <specific name="Prerequisite" > You must have training in Endurance. </specific>
            <specific name="Trigger" > You start your turn dazed, dominated, or stunned by an effect that a save can end. </specific>
            <specific name="Effect" > You make a saving throw with a +5 power bonus against the triggering effect. </specific>
            <specific name="Class" > ID_FMP_CLASS_3 </specific>
            <specific name="Level" > 10 </specific>
            <specific name="Power Type" > Utility </specific>
            <specific name="_Tags" > Essentials </specific>
            <specific name="_ParentFeature" > ID_FMP_CLASS_FEATURE_3018 </specific>
            <specific name="_Subclasses" > ID_FMP_CLASS_716 </specific>
         </Power>

         <Power name="Weapon Master&apos;s Strike" >
            <specific name="Flavor" > You shift your tactics to match your weapon&apos;s strengths, maximizing its advantages to gain an edge against your foe. </specific>
            <specific name="Power Usage" > At-Will </specific>
            <specific name="Display" > Fighter Attack 1 </specific>
            <specific name="Keywords" > Martial, Weapon </specific>
            <specific name="Action Type" > Standard Action </specific>
            <specific name="Attack Type" > Melee weapon </specific>
            <specific name="Target" > One creature </specific>
            <specific name="Effect" > Before making this attack, you may sheathe a weapon and draw a different one as a free action. </specific>
            <specific name="Attack" > Strength vs. AC </specific>
            <specific name="Hit" > 1[W] + Strength modifier damage. In addition, the target takes an additional effect based on the weapon you wield. </specific>
            <specific name="	Axe" > The target takes extra damage equal to your Constitution modifier. </specific>
            <specific name="	Mace" > You slide the target 1 square. </specific>
            <specific name="	Heavy Blade" > Until the end of your next turn, you gain a +1 power bonus to AC against the target&apos;s attacks. </specific>
            <specific name="	Spear or Polearm" > Until the end of your next turn, the target provokes opportunity attacks from you when it shifts. </specific>
            <specific name="Class" > ID_FMP_CLASS_3 </specific>
            <specific name="Level" > 1 </specific>
            <specific name="Power Type" > Attack </specific>
            <Weapon name="Withering Greatspear +4" >
               <RulesElement name="Greatspear" type="Weapon" internal-id="ID_FMP_WEAPON_64" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=64&amp;ftype=3" charelem="223" legality="rules-legal" />
               <RulesElement name="Withering Weapon +4" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2477" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2477&amp;ftype=1" charelem="224" legality="rules-legal" />
               <AttackBonus> 21 </AttackBonus>
               <Damage> 1d10+13 </Damage>
               <AttackStat> Strength </AttackStat>
               <Defense> AC </Defense>
               <HitComponents> +5 Strength modifier.
+6 half your level.
+3 proficiency bonus.
+4 enhancement bonus.
+1 bonus - Two-handed Weapon Talent
+2 Feat bonus - Spear Expertise

               </HitComponents>
               <DamageComponents> +5 Strength modifier.
+4 enhancement bonus.
+4 item bonus - Iron Armbands of Power (paragon tier)

               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.
+2 to damage rolls when charging - Spear Expertise.
+4 to damage rolls against bloodied targets - Gauntlets of Blood (paragon tier).               </Conditions>
               <CritDamage> 23+4d6 </CritDamage>
               <CritComponents> +4d6 weapon critical bonus.
               </CritComponents>
               <CritRange> 20 </CritRange>
            </Weapon>
            <Weapon name="Dynamic Short spear +3" >
               <RulesElement name="Short spear" type="Weapon" internal-id="ID_FMP_WEAPON_165" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=165&amp;ftype=3" charelem="247" legality="rules-legal" />
               <RulesElement name="Dynamic Weapon +3" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2063" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2063&amp;ftype=1" charelem="248" legality="rules-legal" />
               <AttackBonus> 18 </AttackBonus>
               <Damage> 1d6+12 </Damage>
               <AttackStat> Strength </AttackStat>
               <Defense> AC </Defense>
               <HitComponents> +5 Strength modifier.
+6 half your level.
+2 proficiency bonus.
+3 enhancement bonus.
+2 Feat bonus - Spear Expertise

               </HitComponents>
               <DamageComponents> +5 Strength modifier.
+3 enhancement bonus.
+4 item bonus - Iron Armbands of Power (paragon tier)

               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.
+2 to damage rolls when charging - Spear Expertise.
+4 to damage rolls against bloodied targets - Gauntlets of Blood (paragon tier).               </Conditions>
               <CritDamage> 18+3d6 </CritDamage>
               <CritComponents> +3d6 weapon critical bonus.
               </CritComponents>
               <CritRange> 20 </CritRange>
            </Weapon>
            <Weapon name="Unarmed" >
               <AttackBonus> 11 </AttackBonus>
               <Damage> 1d4+9 </Damage>
               <AttackStat> Strength </AttackStat>
               <Defense> AC </Defense>
               <HitComponents> +5 Strength modifier.
+6 half your level.

               </HitComponents>
               <DamageComponents> +5 Strength modifier.
+4 item bonus - Iron Armbands of Power (paragon tier)

               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.
+4 to damage rolls against bloodied targets - Gauntlets of Blood (paragon tier).               </Conditions>
               <CritDamage> 13 </CritDamage>
               <CritRange> 20 </CritRange>
            </Weapon>
         </Power>

         <Power name="Leveraging Strike" >
            <specific name="Flavor" > You use your weapon to move your target where you want. </specific>
            <specific name="Power Usage" > Encounter </specific>
            <specific name="Display" > Polearm Master Attack 11 </specific>
            <specific name="Keywords" > Martial, Weapon </specific>
            <specific name="Action Type" > Standard Action </specific>
            <specific name="Attack Type" > Melee weapon </specific>
            <specific name="Requirement" > You must be wielding a two-handed reach weapon. </specific>
            <specific name="Target" > One creature </specific>
            <specific name="Attack" > Strength vs. AC </specific>
            <specific name="Hit" > 2[W] + Strength modifier damage, and you slide the target a number of squares equal to your Wisdom modifier. </specific>
            <specific name="Miss" > Half damage, and no slide. </specific>
            <specific name="Class" > ID_FMP_PARAGON_PATH_166 </specific>
            <specific name="Level" > 11 </specific>
            <specific name="Power Type" > Attack </specific>
            <Weapon name="Withering Greatspear +4" >
               <RulesElement name="Greatspear" type="Weapon" internal-id="ID_FMP_WEAPON_64" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=64&amp;ftype=3" charelem="223" legality="rules-legal" />
               <RulesElement name="Withering Weapon +4" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2477" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2477&amp;ftype=1" charelem="224" legality="rules-legal" />
               <AttackBonus> 21 </AttackBonus>
               <Damage> 2d10+13 </Damage>
               <AttackStat> Strength </AttackStat>
               <Defense> AC </Defense>
               <HitComponents> +5 Strength modifier.
+6 half your level.
+3 proficiency bonus.
+4 enhancement bonus.
+1 bonus - Two-handed Weapon Talent
+2 Feat bonus - Spear Expertise

               </HitComponents>
               <DamageComponents> +5 Strength modifier.
+4 enhancement bonus.
+4 item bonus - Iron Armbands of Power (paragon tier)

               </DamageComponents>
               <Conditions> +2 item bonus to attack rolls to bull rush attacks - Rushing Cleats.
+2 to damage rolls when charging - Spear Expertise.
+4 to damage rolls against bloodied targets - Gauntlets of Blood (paragon tier).               </Conditions>
               <CritDamage> 33+4d6 </CritDamage>
               <CritComponents> +4d6 weapon critical bonus.
               </CritComponents>
               <CritRange> 20 </CritRange>
            </Weapon>
         </Power>

         <Power name="Reaching Stance" >
            <specific name="Flavor" > You take a wide stance that allows you to lunge at careless foes. </specific>
            <specific name="Power Usage" > Daily </specific>
            <specific name="Display" > Polearm Master Utility 12 </specific>
            <specific name="Keywords" > Martial, Stance, Weapon </specific>
            <specific name="Action Type" > Minor Action </specific>
            <specific name="Attack Type" > Personal </specific>
            <specific name="Requirement" > You must be wielding a two-handed reach weapon. </specific>
            <specific name="Effect" > Until the stance ends, you can make opportunity attacks against enemies within your weapon&apos;s reach. </specific>
            <specific name="Class" > ID_FMP_PARAGON_PATH_166 </specific>
            <specific name="Level" > 12 </specific>
            <specific name="Power Type" > Utility </specific>
         </Power>

      </PowerStats>


      <!--
         The character&apos;s companions
      -->
      <Companions>
      </Companions>


      <!--
         The character&apos;s journal entries
      -->
      <Journal>
      </Journal>

   </CharacterSheet>

   <!--
      Level tags are an internal tree of rules elements, see RulesElementTally
      above for the final list of rules elements,  taking into account
      retraining, etc.
   -->
   <Level>
      <RulesElement name="1" type="Level" internal-id="ID_INTERNAL_LEVEL_1" charelem="8" legality="rules-legal" >
         <RulesElement name="Level1Rules" type="Level1Rules" internal-id="ID_INTERNAL_LEVEL1RULES_LEVEL1RULES" charelem="48" legality="rules-legal" >
            <RulesElement name="SkillRules" type="Level1Rules" internal-id="ID_INTERNAL_LEVEL1RULES_SKILLRULES" charelem="27" legality="rules-legal" >
               <RulesElement name="Acrobatics" type="Skill" internal-id="ID_FMP_SKILL_1" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=1" charelem="49" legality="rules-legal" />
               <RulesElement name="Arcana" type="Skill" internal-id="ID_FMP_SKILL_2" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=2" charelem="50" legality="rules-legal" />
               <RulesElement name="Bluff" type="Skill" internal-id="ID_FMP_SKILL_3" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=3" charelem="51" legality="rules-legal" />
               <RulesElement name="Diplomacy" type="Skill" internal-id="ID_FMP_SKILL_6" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=6" charelem="52" legality="rules-legal" />
               <RulesElement name="Dungeoneering" type="Skill" internal-id="ID_FMP_SKILL_7" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=7" charelem="53" legality="rules-legal" />
               <RulesElement name="Endurance" type="Skill" internal-id="ID_FMP_SKILL_8" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=8" charelem="54" legality="rules-legal" />
               <RulesElement name="Heal" type="Skill" internal-id="ID_FMP_SKILL_9" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=9" charelem="55" legality="rules-legal" />
               <RulesElement name="History" type="Skill" internal-id="ID_FMP_SKILL_11" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=11" charelem="56" legality="rules-legal" />
               <RulesElement name="Insight" type="Skill" internal-id="ID_FMP_SKILL_13" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=13" charelem="57" legality="rules-legal" />
               <RulesElement name="Intimidate" type="Skill" internal-id="ID_FMP_SKILL_14" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=14" charelem="58" legality="rules-legal" />
               <RulesElement name="Nature" type="Skill" internal-id="ID_FMP_SKILL_16" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=16" charelem="59" legality="rules-legal" />
               <RulesElement name="Perception" type="Skill" internal-id="ID_FMP_SKILL_17" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=17" charelem="60" legality="rules-legal" />
               <RulesElement name="Religion" type="Skill" internal-id="ID_FMP_SKILL_18" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=18" charelem="61" legality="rules-legal" />
               <RulesElement name="Stealth" type="Skill" internal-id="ID_FMP_SKILL_20" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=20" charelem="62" legality="rules-legal" />
               <RulesElement name="Streetwise" type="Skill" internal-id="ID_FMP_SKILL_21" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=21" charelem="63" legality="rules-legal" />
               <RulesElement name="Thievery" type="Skill" internal-id="ID_FMP_SKILL_23" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=23" charelem="64" legality="rules-legal" />
               <RulesElement name="Athletics" type="Skill" internal-id="ID_FMP_SKILL_27" url="http://www.wizards.com/dndinsider/compendium/skill.aspx?id=27" charelem="65" legality="rules-legal" />
            </RulesElement>
            <RulesElement name="Heroic" type="Tier" internal-id="ID_INTERNAL_TIER_HEROIC" charelem="66" legality="rules-legal" />
            <RulesElement name="Melee Basic Attack" type="Power" internal-id="ID_INTERNAL_POWER_MELEE_BASIC_ATTACK" charelem="67" legality="rules-legal" />
            <RulesElement name="Ranged Basic Attack" type="Power" internal-id="ID_INTERNAL_POWER_RANGED_BASIC_ATTACK" charelem="68" legality="rules-legal" />
         </RulesElement>
         <RulesElement name="DetailsRules" type="Level1Rules" internal-id="ID_INTERNAL_LEVEL1RULES_DETAILSRULES" charelem="69" legality="rules-legal" >
            <RulesElement name="male" type="Gender" internal-id="ID_INTERNAL_GENDER_MALE" charelem="70" legality="rules-legal" />
            <RulesElement name="Unaligned" type="Alignment" internal-id="ID_FMP_ALIGNMENT_1" charelem="71" legality="rules-legal" />
         </RulesElement>
         <RulesElement name="Expansion1" type="Level1Rules" internal-id="ID_INTERNAL_LEVEL1RULES_EXPANSION1" charelem="72" legality="rules-legal" >
            <RulesElement name="Akanûl" type="Background" internal-id="ID_FMP_BACKGROUND_3" charelem="73" legality="rules-legal" />
            <RulesElement name="Background Benefit" type="Internal" internal-id="ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT" charelem="74" legality="rules-legal" >
               <RulesElement name="Akanûl Benefit" type="Background Choice" internal-id="ID_INTERNAL_BACKGROUND_CHOICE_AKANûL_BENEFIT" charelem="34" legality="rules-legal" />
            </RulesElement>
            <RulesElement name="" type="" charelem="250" legality="rules-legal" />
            <RulesElement name="" type="" charelem="251" legality="rules-legal" />
            <RulesElement name="" type="" charelem="252" legality="rules-legal" />
            <RulesElement name="" type="" charelem="253" legality="rules-legal" />
            <RulesElement name="" type="" charelem="254" legality="rules-legal" />
         </RulesElement>
         <RulesElement name="Expansion2" type="Level1Rules" internal-id="ID_INTERNAL_LEVEL1RULES_EXPANSION2" charelem="75" legality="rules-legal" >
            <RulesElement name="Sohei" type="Theme" internal-id="ID_FMP_THEME_921" charelem="255" legality="rules-legal" >
               <RulesElement name="Sohei Starting Feature" type="Class Feature" internal-id="ID_FMP_CLASS_FEATURE_4215" charelem="256" legality="rules-legal" >
                  <RulesElement name="Sohei Flurry" type="Power" internal-id="ID_FMP_POWER_15928" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=15928" charelem="257" legality="rules-legal" />
               </RulesElement>
               <RulesElement name="Sohei Level 5 Feature" type="Class Feature" internal-id="ID_FMP_CLASS_FEATURE_4216" charelem="258" legality="rules-legal" />
               <RulesElement name="Sohei Level 10 Feature" type="Class Feature" internal-id="ID_FMP_CLASS_FEATURE_4217" charelem="259" legality="rules-legal" />
            </RulesElement>
         </RulesElement>
         <RulesElement name="Expansion3" type="Level1Rules" internal-id="ID_INTERNAL_LEVEL1RULES_EXPANSION3" charelem="76" legality="rules-legal" />
         <RulesElement name="Expansion4" type="Level1Rules" internal-id="ID_INTERNAL_LEVEL1RULES_EXPANSION4" charelem="77" legality="rules-legal" />
         <RulesElement name="Expansion5" type="Level1Rules" internal-id="ID_INTERNAL_LEVEL1RULES_EXPANSION5" charelem="78" legality="rules-legal" />
         <RulesElement name="Longtooth Shifter" type="Race" internal-id="ID_FMP_RACE_27" url="http://www.wizards.com/dndinsider/compendium/race.aspx?id=27" charelem="36" legality="rules-legal" >
            <RulesElement name="Longtooth Shifter" type="Grants" internal-id="ID_INTERNAL_GRANTS_LONGTOOTH_SHIFTER" charelem="79" legality="rules-legal" >
               <RulesElement name="Medium" type="Size" internal-id="ID_INTERNAL_SIZE_MEDIUM" charelem="80" legality="rules-legal" />
               <RulesElement name="Low-light" type="Vision" internal-id="ID_INTERNAL_VISION_LOW-LIGHT" charelem="81" legality="rules-legal" />
               <RulesElement name="Longtooth Shifting" type="Racial Trait" internal-id="ID_FMP_RACIAL_TRAIT_429" charelem="82" legality="rules-legal" >
                  <RulesElement name="Longtooth Shifting" type="Power" internal-id="ID_FMP_POWER_2483" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=2483" charelem="83" legality="rules-legal" />
               </RulesElement>
               <RulesElement name="Strength" type="Race Ability Bonus" internal-id="ID_INTERNAL_RACE_ABILITY_BONUS_STRENGTH" charelem="1" legality="rules-legal" />
               <RulesElement name="Wisdom" type="Race Ability Bonus" internal-id="ID_INTERNAL_RACE_ABILITY_BONUS_WISDOM" charelem="7" legality="rules-legal" />
               <RulesElement name="Common" type="Language" internal-id="ID_FMP_LANGUAGE_1" charelem="37" legality="rules-legal" />
               <RulesElement name="Athletics Bonus" type="Racial Trait" internal-id="ID_INTERNAL_RACIAL_TRAIT_ATHLETICS_BONUS" charelem="33" legality="rules-legal" />
               <RulesElement name="Endurance Bonus" type="Racial Trait" internal-id="ID_INTERNAL_RACIAL_TRAIT_ENDURANCE_BONUS" charelem="29" legality="rules-legal" />
            </RulesElement>
            <RulesElement name="Goblin" type="Language" internal-id="ID_FMP_LANGUAGE_20" charelem="38" legality="rules-legal" />
         </RulesElement>
         <RulesElement name="Fighter" type="Class" internal-id="ID_FMP_CLASS_3" url="http://www.wizards.com/dndinsider/compendium/class.aspx?id=3" charelem="24" legality="rules-legal" >
            <RulesElement name="Fighter" type="Grants" internal-id="ID_INTERNAL_GRANTS_FIGHTER" charelem="84" legality="rules-legal" >
               <RulesElement name="Defender" type="Role" internal-id="ID_FMP_ROLE_4" charelem="85" legality="rules-legal" />
               <RulesElement name="Martial" type="Power Source" internal-id="ID_FMP_POWER_SOURCE_1" charelem="86" legality="rules-legal" />
               <RulesElement name="Armor Proficiency (Cloth)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)" charelem="87" legality="rules-legal" />
               <RulesElement name="Armor Proficiency (Leather)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)" charelem="88" legality="rules-legal" />
               <RulesElement name="Armor Proficiency (Hide)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)" charelem="89" legality="rules-legal" />
               <RulesElement name="Armor Proficiency (Chainmail)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)" charelem="90" legality="rules-legal" />
               <RulesElement name="Armor Proficiency (Scale)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(SCALE)" charelem="91" legality="rules-legal" />
               <RulesElement name="Shield Proficiency (Heavy)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(HEAVY)" charelem="92" legality="rules-legal" />
               <RulesElement name="Shield Proficiency (Light)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)" charelem="93" legality="rules-legal" />
               <RulesElement name="Simple Melee" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE" charelem="94" legality="rules-legal" >
                  <RulesElement name="Weapon Proficiency (Club)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLUB)" charelem="95" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Dagger)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DAGGER)" charelem="96" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Javelin)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(JAVELIN)" charelem="97" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Mace)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MACE)" charelem="98" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Sickle)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SICKLE)" charelem="99" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Spear)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SPEAR)" charelem="100" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Greatclub)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATCLUB)" charelem="101" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Morningstar)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MORNINGSTAR)" charelem="102" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Quarterstaff)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(QUARTERSTAFF)" charelem="103" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Scythe)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCYTHE)" charelem="104" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Spiked gauntlet)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SPIKED_GAUNTLET)" charelem="105" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Talid)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TALID)" charelem="106" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Widow&apos;s knife)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WIDOW&apos;S_KNIFE)" charelem="107" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Wrist razors)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WRIST_RAZORS)" charelem="108" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Light mace)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LIGHT_MACE)" charelem="109" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Short spear)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHORT_SPEAR)" charelem="110" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Claw Fighter Claw)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLAW_FIGHTER_CLAW)" charelem="111" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Shadowblade)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHADOWBLADE)" charelem="112" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Climbing Claw)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLIMBING_CLAW)" charelem="113" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Dragontooth Shield (Heroic Tier))" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DRAGONTOOTH_SHIELD_(HEROIC_TIER))" charelem="114" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Fighting Shield (Heroic Tier))" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FIGHTING_SHIELD_(HEROIC_TIER))" charelem="115" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Soul Shield (Paragon Tier))" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SOUL_SHIELD_(PARAGON_TIER))" charelem="116" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Sun Shield (Paragon Tier))" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SUN_SHIELD_(PARAGON_TIER))" charelem="117" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Rod of Seven Parts (Weapon))" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(ROD_OF_SEVEN_PARTS_(WEAPON))" charelem="118" legality="rules-legal" />
               </RulesElement>
               <RulesElement name="Military Melee" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_MILITARY_MELEE" charelem="119" legality="rules-legal" >
                  <RulesElement name="Weapon Proficiency (Battleaxe)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BATTLEAXE)" charelem="120" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Handaxe)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HANDAXE)" charelem="121" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Flail)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FLAIL)" charelem="122" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Throwing hammer)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(THROWING_HAMMER)" charelem="123" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Warhammer)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WARHAMMER)" charelem="124" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (War Pick)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WAR_PICK)" charelem="125" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Scimitar)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCIMITAR)" charelem="126" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Longsword)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGSWORD)" charelem="127" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Short sword)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHORT_SWORD)" charelem="128" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Greataxe)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATAXE)" charelem="129" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Heavy flail)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HEAVY_FLAIL)" charelem="130" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Glaive)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GLAIVE)" charelem="131" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Halberd)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HALBERD)" charelem="132" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Maul)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MAUL)" charelem="133" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Longspear)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGSPEAR)" charelem="134" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Greatsword)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATSWORD)" charelem="135" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Rapier)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(RAPIER)" charelem="136" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Falchion)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FALCHION)" charelem="137" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Broadsword)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BROADSWORD)" charelem="138" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Khopesh)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(KHOPESH)" charelem="139" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Light war pick)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LIGHT_WAR_PICK)" charelem="140" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Scourge)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCOURGE)" charelem="141" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Trident)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TRIDENT)" charelem="142" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Heavy war pick)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HEAVY_WAR_PICK)" charelem="143" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Alhulak)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(ALHULAK)" charelem="144" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Carrikal)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CARRIKAL)" charelem="145" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Trikal)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TRIKAL)" charelem="146" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Blade of Winter&apos;s Mourning)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BLADE_OF_WINTER&apos;S_MOURNING)" charelem="147" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Blade of Annihilation)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BLADE_OF_ANNIHILATION)" charelem="148" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Starshadow Blade)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(STARSHADOW_BLADE)" charelem="149" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Sword of the White Well)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SWORD_OF_THE_WHITE_WELL)" charelem="150" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Scourge of Exquisite Agony)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCOURGE_OF_EXQUISITE_AGONY)" charelem="151" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Lance)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LANCE)" charelem="152" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Pike)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(PIKE)" charelem="153" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Blade of Chaos)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BLADE_OF_CHAOS)" charelem="154" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Feral Armor Claw)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FERAL_ARMOR_CLAW)" charelem="155" legality="rules-legal" />
               </RulesElement>
               <RulesElement name="Simple Ranged" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED" charelem="156" legality="rules-legal" >
                  <RulesElement name="Weapon Proficiency (Hand crossbow)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HAND_CROSSBOW)" charelem="157" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Sling)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SLING)" charelem="158" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Crossbow)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CROSSBOW)" charelem="159" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Repeating crossbow)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(REPEATING_CROSSBOW)" charelem="160" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Dejada)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DEJADA)" charelem="161" legality="rules-legal" />
               </RulesElement>
               <RulesElement name="Military Ranged" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_MILITARY_RANGED" charelem="162" legality="rules-legal" >
                  <RulesElement name="Weapon Proficiency (Shortbow)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHORTBOW)" charelem="163" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Longbow)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGBOW)" charelem="164" legality="rules-legal" />
                  <RulesElement name="Weapon Proficiency (Chatkcha)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CHATKCHA)" charelem="165" legality="rules-legal" />
               </RulesElement>
               <RulesElement name="Combat Challenge" type="Class Feature" internal-id="ID_FMP_CLASS_FEATURE_54" charelem="166" legality="rules-legal" >
                  <RulesElement name="Combat Challenge" type="Power" internal-id="ID_FMP_POWER_7419" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=7419" charelem="167" legality="rules-legal" />
               </RulesElement>
               <RulesElement name="Combat Superiority" type="Class Feature" internal-id="ID_FMP_CLASS_FEATURE_401" charelem="39" legality="rules-legal" />
               <RulesElement name="Fighter Talents" type="Class Feature" internal-id="ID_FMP_CLASS_FEATURE_1064" charelem="168" legality="rules-legal" >
                  <RulesElement name="Two-handed Weapon Talent" type="Class Feature" internal-id="ID_FMP_CLASS_FEATURE_1063" charelem="41" legality="rules-legal" />
               </RulesElement>
               <RulesElement name="Fighter Implements" type="Grants" internal-id="ID_INTERNAL_GRANTS_FIGHTER_IMPLEMENTS" charelem="169" legality="rules-legal" />
            </RulesElement>
            <RulesElement name="Cleave" type="Power" internal-id="ID_FMP_POWER_992" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=992" charelem="170" legality="rules-legal" />
            <RulesElement name="Footwork Lure" type="Power" internal-id="ID_FMP_POWER_2105" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=2105" charelem="187" legality="rules-legal" />
            <RulesElement name="" type="" charelem="260" legality="rules-legal" />
            <RulesElement name="Athletics" type="Skill Training" internal-id="ID_INTERNAL_SKILL_TRAINING_ATHLETICS" charelem="32" legality="rules-legal" />
            <RulesElement name="Endurance" type="Skill Training" internal-id="ID_INTERNAL_SKILL_TRAINING_ENDURANCE" charelem="28" legality="rules-legal" />
            <RulesElement name="Heal" type="Skill Training" internal-id="ID_INTERNAL_SKILL_TRAINING_HEAL" charelem="30" legality="rules-legal" />
         </RulesElement>
         <RulesElement name="Weapon Proficiency (Greatspear)" type="Feat" internal-id="ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(GREATSPEAR)" charelem="171" legality="rules-legal" >
            <RulesElement name="Weapon Proficiency (Greatspear)" type="Proficiency" internal-id="ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATSPEAR)" charelem="172" legality="rules-legal" />
         </RulesElement>
         <RulesElement name="Hack and Hew" type="Power" internal-id="ID_FMP_POWER_10474" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=10474" charelem="173" legality="rules-legal" />
         <RulesElement name="Tempest Dance" type="Power" internal-id="ID_FMP_POWER_4316" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=4316" charelem="174" legality="rules-legal" />
         <RulesElement name="Malar" type="Deity" internal-id="ID_FMP_DEITY_73" charelem="175" legality="rules-legal" />
      </RulesElement>
      <loot count="1" equip-count="1" ShowPowerCard="1" >
         <RulesElement name="Greatspear" type="Weapon" internal-id="ID_FMP_WEAPON_64" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=64&amp;ftype=3" charelem="261" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="1" ShowPowerCard="1" >
         <RulesElement name="Scale Armor" type="Armor" internal-id="ID_FMP_ARMOR_5" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=5&amp;ftype=2" charelem="262" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Adventurer&apos;s Kit" type="Gear" internal-id="ID_FMP_GEAR_1" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1&amp;ftype=4" charelem="263" legality="rules-legal" />
      </loot>
   </Level>
   <Level>
      <RulesElement name="2" type="Level" internal-id="ID_INTERNAL_LEVEL_2" charelem="14" legality="rules-legal" >
         <RulesElement name="Mobile Challenge" type="Feat" internal-id="ID_FMP_FEAT_1736" url="http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1736" charelem="191" legality="rules-legal" />
         <RulesElement name="Pass Forward" type="Power" internal-id="ID_FMP_POWER_2116" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=2116" charelem="176" legality="rules-legal" />
         <RulesElement name="" type="" charelem="264" legality="rules-legal" />
      </RulesElement>
      <loot count="1" equip-count="1" ShowPowerCard="1" >
         <RulesElement name="Scale Armor" type="Armor" internal-id="ID_FMP_ARMOR_5" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=5&amp;ftype=2" charelem="265" legality="rules-legal" />
         <RulesElement name="Veteran&apos;s Armor +1" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_1883" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1883&amp;ftype=1" charelem="266" legality="rules-legal" />
      </loot>
      <loot count="0" equip-count="-1" ShowPowerCard="1" >
         <RulesElement name="Scale Armor" type="Armor" internal-id="ID_FMP_ARMOR_5" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=5&amp;ftype=2" charelem="267" legality="rules-legal" />
      </loot>
      <loot count="0" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Greatsword" type="Weapon" internal-id="ID_FMP_WEAPON_27" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=27&amp;ftype=3" charelem="268" legality="rules-legal" />
         <RulesElement name="Ki Weapon +1" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_8630" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=8630&amp;ftype=1" charelem="269" legality="rules-legal" />
      </loot>
      <loot count="0" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Scale Armor" type="Armor" internal-id="ID_FMP_ARMOR_5" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=5&amp;ftype=2" charelem="270" legality="rules-legal" />
         <RulesElement name="Savage Armor +1" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_4353" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=4353&amp;ftype=1" charelem="271" legality="rules-legal" />
      </loot>
      <loot count="0" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Amulet of Protection +1" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_1047" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1047&amp;ftype=1" charelem="272" legality="rules-legal" />
      </loot>
      <loot count="0" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Greatsword" type="Weapon" internal-id="ID_FMP_WEAPON_27" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=27&amp;ftype=3" charelem="273" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="1" ShowPowerCard="1" >
         <RulesElement name="Circlet of Second Chances" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_3433" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=3433&amp;ftype=1" charelem="274" legality="rules-legal" />
      </loot>
   </Level>
   <Level>
      <RulesElement name="3" type="Level" internal-id="ID_INTERNAL_LEVEL_3" charelem="15" legality="rules-legal" >
         <RulesElement name="Parry and Riposte" type="Power" internal-id="ID_FMP_POWER_2106" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=2106" charelem="179" legality="rules-legal" />
         <RulesElement name="" type="" charelem="275" legality="rules-legal" />
      </RulesElement>
      <loot count="1" equip-count="1" ShowPowerCard="1" >
         <RulesElement name="Amulet of Life +1" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_8233" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=8233&amp;ftype=1" charelem="276" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="1" ShowPowerCard="1" >
         <RulesElement name="Greatspear" type="Weapon" internal-id="ID_FMP_WEAPON_64" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=64&amp;ftype=3" charelem="277" legality="rules-legal" />
         <RulesElement name="Deathstalker Weapon +1" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2020" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2020&amp;ftype=1" charelem="278" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="1" ShowPowerCard="1" >
         <RulesElement name="Scale Armor" type="Armor" internal-id="ID_FMP_ARMOR_5" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=5&amp;ftype=2" charelem="279" legality="rules-legal" />
         <RulesElement name="Imposter&apos;s Armor +2" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_1625" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1625&amp;ftype=1" charelem="280" legality="rules-legal" />
      </loot>
      <loot count="0" equip-count="-1" ShowPowerCard="1" >
         <RulesElement name="Greatspear" type="Weapon" internal-id="ID_FMP_WEAPON_64" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=64&amp;ftype=3" charelem="281" legality="rules-legal" />
      </loot>
      <loot count="0" equip-count="-1" ShowPowerCard="1" >
         <RulesElement name="Scale Armor" type="Armor" internal-id="ID_FMP_ARMOR_5" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=5&amp;ftype=2" charelem="282" legality="rules-legal" />
         <RulesElement name="Veteran&apos;s Armor +1" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_1883" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1883&amp;ftype=1" charelem="283" legality="rules-legal" />
      </loot>
   </Level>
   <Level>
      <RulesElement name="4" type="Level" internal-id="ID_INTERNAL_LEVEL_4" charelem="16" legality="rules-legal" >
         <RulesElement name="Forceful Opportunist" type="Feat" internal-id="ID_FMP_FEAT_1971" url="http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1971" charelem="177" legality="rules-legal" />
         <RulesElement name="Dexterity" type="Ability Increase (Level 4)" internal-id="ID_INTERNAL_ABILITY_INCREASE_(LEVEL_4)_DEXTERITY" charelem="5" legality="rules-legal" />
         <RulesElement name="Strength" type="Ability Increase (Level 4)" internal-id="ID_INTERNAL_ABILITY_INCREASE_(LEVEL_4)_STRENGTH" charelem="2" legality="rules-legal" />
         <RulesElement name="Rain of Blows" type="Power" internal-id="ID_FMP_POWER_268" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=268" charelem="178" replaces="179" legality="rules-legal" >
         </RulesElement>
      </RulesElement>
   </Level>
   <Level>
      <RulesElement name="5" type="Level" internal-id="ID_INTERNAL_LEVEL_5" charelem="17" legality="rules-legal" >
         <RulesElement name="Rain of Steel" type="Power" internal-id="ID_FMP_POWER_1436" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=1436" charelem="180" legality="rules-legal" />
         <RulesElement name="" type="" charelem="284" legality="rules-legal" />
      </RulesElement>
      <loot count="1" equip-count="1" ShowPowerCard="1" >
         <RulesElement name="Iron Armbands of Power (heroic tier)" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_3234" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=3234&amp;ftype=1" charelem="285" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="1" ShowPowerCard="1" >
         <RulesElement name="Greatspear" type="Weapon" internal-id="ID_FMP_WEAPON_64" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=64&amp;ftype=3" charelem="286" legality="rules-legal" />
         <RulesElement name="Strongheart Weapon +2" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2384" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2384&amp;ftype=1" charelem="287" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="1" ShowPowerCard="1" >
         <RulesElement name="Rushing Cleats" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_3344" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=3344&amp;ftype=1" charelem="288" legality="rules-legal" />
      </loot>
      <loot count="-1" equip-count="-1" ShowPowerCard="1" >
         <RulesElement name="Greatspear" type="Weapon" internal-id="ID_FMP_WEAPON_64" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=64&amp;ftype=3" charelem="289" legality="rules-legal" />
         <RulesElement name="Deathstalker Weapon +1" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2020" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2020&amp;ftype=1" charelem="290" legality="rules-legal" />
      </loot>
      <loot count="0" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Potion of Cure Moderate Wounds" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_149658.10" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=149658.10&amp;ftype=1" charelem="291" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="1" ShowPowerCard="1" >
         <RulesElement name="Amulet of Life +2" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_8234" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=8234&amp;ftype=1" charelem="292" legality="rules-legal" />
      </loot>
      <loot count="5" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Potion of Cure Light Wounds" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_149657.1" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=149657.1&amp;ftype=1" charelem="293" legality="rules-legal" />
      </loot>
      <loot count="2" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Nail of Sealing" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_4040" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=4040&amp;ftype=1" charelem="294" legality="rules-legal" />
      </loot>
      <loot count="-1" equip-count="-1" ShowPowerCard="1" >
         <RulesElement name="Amulet of Life +1" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_8233" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=8233&amp;ftype=1" charelem="295" legality="rules-legal" />
      </loot>
      <loot count="-1" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Scale Armor" type="Armor" internal-id="ID_FMP_ARMOR_5" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=5&amp;ftype=2" charelem="296" legality="rules-legal" />
         <RulesElement name="Veteran&apos;s Armor +1" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_1883" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1883&amp;ftype=1" charelem="297" legality="rules-legal" />
      </loot>
      <loot count="-1" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Scale Armor" type="Armor" internal-id="ID_FMP_ARMOR_5" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=5&amp;ftype=2" charelem="298" legality="rules-legal" />
      </loot>
      <loot count="-1" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Greatspear" type="Weapon" internal-id="ID_FMP_WEAPON_64" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=64&amp;ftype=3" charelem="299" legality="rules-legal" />
      </loot>
   </Level>
   <Level>
      <RulesElement name="6" type="Level" internal-id="ID_INTERNAL_LEVEL_6" charelem="18" legality="rules-legal" >
         <RulesElement name="Polearm Momentum" type="Feat" internal-id="ID_FMP_FEAT_806" url="http://www.wizards.com/dndinsider/compendium/feat.aspx?id=806" charelem="181" legality="rules-legal" />
         <RulesElement name="Kirre&apos;s Roar" type="Power" internal-id="ID_FMP_POWER_12850" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=12850" charelem="182" legality="rules-legal" />
         <RulesElement name="" type="" charelem="300" legality="rules-legal" />
      </RulesElement>
      <loot count="1" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Bag of Holding" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_1119" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1119&amp;ftype=1" charelem="301" legality="rules-legal" />
      </loot>
   </Level>
   <Level>
      <RulesElement name="7" type="Level" internal-id="ID_INTERNAL_LEVEL_7" charelem="19" legality="rules-legal" >
         <RulesElement name="Come and Get It" type="Power" internal-id="ID_FMP_POWER_2177" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=2177" charelem="183" legality="rules-legal" />
         <RulesElement name="" type="" charelem="302" legality="rules-legal" />
      </RulesElement>
   </Level>
   <Level>
      <RulesElement name="8" type="Level" internal-id="ID_INTERNAL_LEVEL_8" charelem="20" legality="rules-legal" >
         <RulesElement name="Spear Expertise" type="Feat" internal-id="ID_FMP_FEAT_3150" url="http://www.wizards.com/dndinsider/compendium/feat.aspx?id=3150" charelem="42" legality="rules-legal" />
         <RulesElement name="Strength" type="Ability Increase (Level 8)" internal-id="ID_INTERNAL_ABILITY_INCREASE_(LEVEL_8)_STRENGTH" charelem="3" legality="rules-legal" />
         <RulesElement name="Dexterity" type="Ability Increase (Level 8)" internal-id="ID_INTERNAL_ABILITY_INCREASE_(LEVEL_8)_DEXTERITY" charelem="6" legality="rules-legal" />
         <RulesElement name="" type="" charelem="303" legality="rules-legal" />
      </RulesElement>
      <loot count="1" equip-count="1" ShowPowerCard="1" >
         <RulesElement name="Belt of Raging Endurance (heroic tier)" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_8120" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=8120&amp;ftype=1" charelem="304" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="1" ShowPowerCard="1" >
         <RulesElement name="Scale Armor" type="Armor" internal-id="ID_FMP_ARMOR_5" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=5&amp;ftype=2" charelem="305" legality="rules-legal" />
         <RulesElement name="Solar Armor +2" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_1813" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1813&amp;ftype=1" charelem="306" legality="rules-legal" />
      </loot>
      <loot count="0" equip-count="-1" ShowPowerCard="1" >
         <RulesElement name="Scale Armor" type="Armor" internal-id="ID_FMP_ARMOR_5" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=5&amp;ftype=2" charelem="307" legality="rules-legal" />
         <RulesElement name="Imposter&apos;s Armor +2" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_1625" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1625&amp;ftype=1" charelem="308" legality="rules-legal" />
      </loot>
   </Level>
   <Level>
      <RulesElement name="9" type="Level" internal-id="ID_INTERNAL_LEVEL_9" charelem="21" legality="rules-legal" >
         <RulesElement name="Shift the Battlefield" type="Power" internal-id="ID_FMP_POWER_1437" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=1437" charelem="184" legality="rules-legal" />
         <RulesElement name="" type="" charelem="309" legality="rules-legal" />
      </RulesElement>
      <loot count="1" equip-count="1" ShowPowerCard="1" >
         <RulesElement name="Greatspear" type="Weapon" internal-id="ID_FMP_WEAPON_64" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=64&amp;ftype=3" charelem="310" legality="rules-legal" />
         <RulesElement name="Withering Weapon +4" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2477" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2477&amp;ftype=1" charelem="311" legality="rules-legal" />
      </loot>
      <loot count="0" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Scale Armor" type="Armor" internal-id="ID_FMP_ARMOR_5" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=5&amp;ftype=2" charelem="312" legality="rules-legal" />
         <RulesElement name="Armor of Attraction +4" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_1444" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1444&amp;ftype=1" charelem="313" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="1" ShowPowerCard="1" >
         <RulesElement name="Helm of Able Defense" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_7525" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=7525&amp;ftype=1" charelem="314" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="1" ShowPowerCard="1" >
         <RulesElement name="Iron Armbands of Power (paragon tier)" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_3235" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=3235&amp;ftype=1" charelem="315" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="1" ShowPowerCard="1" >
         <RulesElement name="Amulet of Life +4" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_8236" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=8236&amp;ftype=1" charelem="316" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="1" ShowPowerCard="1" >
         <RulesElement name="Ring of Circling Fangs" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_9749" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=9749&amp;ftype=1" charelem="317" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="1" ShowPowerCard="1" >
         <RulesElement name="Ring of Ramming" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_3750" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=3750&amp;ftype=1" charelem="318" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Handy Haversack" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_1128" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1128&amp;ftype=1" charelem="319" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Climber&apos;s Rope" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_149624.6" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=149624.6&amp;ftype=1" charelem="320" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Rope of Climbing" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_1134" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1134&amp;ftype=1" charelem="321" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Dice of Auspicious Fortune" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_8245" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=8245&amp;ftype=1" charelem="322" legality="rules-legal" />
      </loot>
      <loot count="-1" equip-count="-1" ShowPowerCard="1" >
         <RulesElement name="Circlet of Second Chances" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_3433" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=3433&amp;ftype=1" charelem="323" legality="rules-legal" />
      </loot>
      <loot count="-1" equip-count="-1" ShowPowerCard="1" >
         <RulesElement name="Amulet of Life +2" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_8234" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=8234&amp;ftype=1" charelem="324" legality="rules-legal" />
      </loot>
      <loot count="-1" equip-count="-1" ShowPowerCard="1" >
         <RulesElement name="Iron Armbands of Power (heroic tier)" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_3234" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=3234&amp;ftype=1" charelem="325" legality="rules-legal" />
      </loot>
      <loot count="-1" equip-count="-1" ShowPowerCard="1" >
         <RulesElement name="Greatspear" type="Weapon" internal-id="ID_FMP_WEAPON_64" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=64&amp;ftype=3" charelem="326" legality="rules-legal" />
         <RulesElement name="Strongheart Weapon +2" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2384" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2384&amp;ftype=1" charelem="327" legality="rules-legal" />
      </loot>
      <loot count="-1" equip-count="-1" ShowPowerCard="1" >
         <RulesElement name="Scale Armor" type="Armor" internal-id="ID_FMP_ARMOR_5" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=5&amp;ftype=2" charelem="328" legality="rules-legal" />
         <RulesElement name="Solar Armor +2" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_1813" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1813&amp;ftype=1" charelem="329" legality="rules-legal" />
      </loot>
      <loot count="-1" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Scale Armor" type="Armor" internal-id="ID_FMP_ARMOR_5" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=5&amp;ftype=2" charelem="330" legality="rules-legal" />
         <RulesElement name="Imposter&apos;s Armor +2" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_1625" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1625&amp;ftype=1" charelem="331" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="1" ShowPowerCard="1" >
         <RulesElement name="Kreen Scale Armor" type="Armor" internal-id="ID_FMP_ARMOR_92" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=92&amp;ftype=2" charelem="332" legality="rules-legal" />
         <RulesElement name="Armor of Attraction +4" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_1444" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1444&amp;ftype=1" charelem="333" legality="rules-legal" />
      </loot>
      <loot count="0" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Wyrmscale Armor" type="Armor" internal-id="ID_FMP_ARMOR_18" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=18&amp;ftype=2" charelem="334" legality="rules-legal" />
         <RulesElement name="Armor of Attraction +4" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_1444" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1444&amp;ftype=1" charelem="335" legality="rules-legal" />
      </loot>
      <loot count="0" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Longbow" type="Weapon" internal-id="ID_FMP_WEAPON_40" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=40&amp;ftype=3" charelem="336" legality="rules-legal" />
         <RulesElement name="Distance Weapon +3" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2053" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2053&amp;ftype=1" charelem="337" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Longbow" type="Weapon" internal-id="ID_FMP_WEAPON_40" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=40&amp;ftype=3" charelem="338" legality="rules-legal" />
         <RulesElement name="Distance Weapon +1" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2051" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2051&amp;ftype=1" charelem="339" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Phantom Bridle" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_9165" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=9165&amp;ftype=1" charelem="340" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Woundstitch Powder" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_7279" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=7279&amp;ftype=1" charelem="341" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Eternal Chalk" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_3849" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=3849&amp;ftype=1" charelem="342" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Ten-foot pole" type="Gear" internal-id="ID_FMP_GEAR_160" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=160&amp;ftype=4" charelem="343" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Mirror" type="Gear" internal-id="ID_FMP_GEAR_231" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=231&amp;ftype=4" charelem="344" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Stone of Earth" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_7475" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=7475&amp;ftype=1" charelem="345" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Foe Stone" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_3854" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=3854&amp;ftype=1" charelem="346" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Battle Standard of the Hungry Blade" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_8243" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=8243&amp;ftype=1" charelem="347" legality="rules-legal" />
      </loot>
      <loot count="8" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Potion of Cure Light Wounds" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_149657.1" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=149657.1&amp;ftype=1" charelem="348" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="1" ShowPowerCard="1" >
         <RulesElement name="Gauntlets of Blood (paragon tier)" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_5836" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=5836&amp;ftype=1" charelem="349" legality="rules-legal" />
      </loot>
   </Level>
   <Level>
      <RulesElement name="10" type="Level" internal-id="ID_INTERNAL_LEVEL_10" charelem="22" legality="rules-legal" >
         <RulesElement name="Longhand Student" type="Feat" internal-id="ID_FMP_FEAT_2356" url="http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2356" charelem="31" legality="rules-legal" />
         <RulesElement name="Clearheaded" type="Power" internal-id="ID_FMP_POWER_12702" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=12702" charelem="185" legality="rules-legal" />
         <RulesElement name="Weapon Master&apos;s Strike" type="Power" internal-id="ID_FMP_POWER_10332" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=10332" charelem="186" replaces="187" legality="rules-legal" >
         </RulesElement>
      </RulesElement>
      <loot count="-1" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Foe Stone" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_3854" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=3854&amp;ftype=1" charelem="350" legality="rules-legal" />
      </loot>
      <loot count="-1" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Battle Standard of the Hungry Blade" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_8243" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=8243&amp;ftype=1" charelem="351" legality="rules-legal" />
      </loot>
      <loot count="1" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Cinder of Gazra (paragon tier)" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_149898.12" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=149898.12&amp;ftype=1" charelem="352" legality="rules-legal" />
      </loot>
   </Level>
   <Level>
      <RulesElement name="11" type="Level" internal-id="ID_INTERNAL_LEVEL_11" charelem="4" legality="rules-legal" >
         <RulesElement name="Paragon" type="Tier" internal-id="ID_INTERNAL_TIER_PARAGON" charelem="188" legality="rules-legal" />
         <RulesElement name="Polearm Gamble" type="Feat" internal-id="ID_FMP_FEAT_258" url="http://www.wizards.com/dndinsider/compendium/feat.aspx?id=258" charelem="189" legality="rules-legal" />
         <RulesElement name="Polearm Master" type="Paragon Path" internal-id="ID_FMP_PARAGON_PATH_166" url="http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=166" charelem="190" legality="rules-legal" >
            <RulesElement name="Lunging Action" type="Class Feature" internal-id="ID_FMP_CLASS_FEATURE_904" charelem="194" legality="rules-legal" />
            <RulesElement name="Forceful Reach" type="Class Feature" internal-id="ID_FMP_CLASS_FEATURE_905" charelem="193" legality="rules-legal" />
            <RulesElement name="Longarm Grasp" type="Class Feature" internal-id="ID_FMP_CLASS_FEATURE_906" charelem="353" legality="rules-legal" />
            <RulesElement name="Leveraging Strike" type="Power" internal-id="ID_FMP_POWER_4672" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=4672" charelem="192" legality="rules-legal" />
            <RulesElement name="Reaching Stance" type="Power" internal-id="ID_FMP_POWER_4673" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=4673" charelem="195" legality="rules-legal" />
            <RulesElement name="Polearm Sweep" type="Power" internal-id="ID_FMP_POWER_4674" url="http://www.wizards.com/dndinsider/compendium/power.aspx?id=4674" charelem="354" legality="rules-legal" />
         </RulesElement>
         <RulesElement name="Improved Defenses" type="Feat" internal-id="ID_FMP_FEAT_3143" url="http://www.wizards.com/dndinsider/compendium/feat.aspx?id=3143" charelem="11" replaces="191" legality="rules-legal" >
         </RulesElement>
      </RulesElement>
      <loot count="0" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Spiked gauntlet" type="Weapon" internal-id="ID_FMP_WEAPON_48" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=48&amp;ftype=3" charelem="355" legality="rules-legal" />
      </loot>
      <loot count="0" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Greatspear" type="Weapon" internal-id="ID_FMP_WEAPON_64" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=64&amp;ftype=3" charelem="356" legality="rules-legal" />
         <RulesElement name="Withering Weapon +4" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2477" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2477&amp;ftype=1" charelem="357" legality="rules-legal" />
      </loot>
      <loot count="0" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Dagger" type="Weapon" internal-id="ID_FMP_WEAPON_3" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=3&amp;ftype=3" charelem="358" legality="rules-legal" />
      </loot>
   </Level>
   <Level>
      <RulesElement name="12" type="Level" internal-id="ID_INTERNAL_LEVEL_12" charelem="23" legality="rules-legal" >
         <RulesElement name="Improved Initiative" type="Feat" internal-id="ID_FMP_FEAT_272" url="http://www.wizards.com/dndinsider/compendium/feat.aspx?id=272" charelem="26" legality="rules-legal" />
         <RulesElement name="" type="" charelem="359" replaces="255" legality="rules-legal" />
      </RulesElement>
      <loot count="1" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Short spear" type="Weapon" internal-id="ID_FMP_WEAPON_165" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=165&amp;ftype=3" charelem="360" legality="rules-legal" />
         <RulesElement name="Dynamic Weapon +3" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2063" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2063&amp;ftype=1" charelem="361" legality="rules-legal" />
      </loot>
      <loot count="0" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Greatspear" type="Weapon" internal-id="ID_FMP_WEAPON_64" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=64&amp;ftype=3" charelem="362" legality="rules-legal" />
         <RulesElement name="Withering Weapon +4" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_2477" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=2477&amp;ftype=1" charelem="363" legality="rules-legal" />
      </loot>
      <loot count="0" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Kreen Scale Armor" type="Armor" internal-id="ID_FMP_ARMOR_92" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=92&amp;ftype=2" charelem="364" legality="rules-legal" />
         <RulesElement name="Armor of Attraction +4" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_1444" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1444&amp;ftype=1" charelem="365" legality="rules-legal" />
      </loot>
      <loot count="0" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Chainmail" type="Armor" internal-id="ID_FMP_ARMOR_4" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=4&amp;ftype=2" charelem="366" legality="rules-legal" />
      </loot>
      <loot count="0" equip-count="0" ShowPowerCard="1" >
         <RulesElement name="Scale Armor" type="Armor" internal-id="ID_FMP_ARMOR_5" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=5&amp;ftype=2" charelem="367" legality="rules-legal" />
         <RulesElement name="Armor of Attraction +4" type="Magic Item" internal-id="ID_FMP_MAGIC_ITEM_1444" url="http://www.wizards.com/dndinsider/compendium/item.aspx?fid=1444&amp;ftype=1" charelem="368" legality="rules-legal" />
      </loot>
   </Level>


   <!--
      Textstrings are builder variables and contain entered text data, such
      as character names, as well as internal data
   -->
   <textstring name="_PER_LEVEL_1_Carried Money" >
      15 gp
   </textstring>
   <textstring name="_PER_LEVEL_1_Stored Money" >
      
   </textstring>
   <textstring name="_PER_LEVEL_1_Residuum" >
      0
   </textstring>
   <textstring name="CampaignSettingID" >
      &lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-16&quot;?&gt;&lt;ContentIdentifier xmlns:i=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xmlns=&quot;http://schemas.datacontract.org/2004/07/WotC.ContentVault&quot;&gt;&lt;ContentID&gt;2&lt;/ContentID&gt;&lt;Official&gt;true&lt;/Official&gt;&lt;OfficialTypeID i:nil=&quot;true&quot; /&gt;&lt;ScratchID i:nil=&quot;true&quot; /&gt;&lt;TypeID&gt;1&lt;/TypeID&gt;&lt;/ContentIdentifier&gt;
   </textstring>
   <textstring name="Character Save File" >
      C:\Windows\TEMP\tmp7B74.tmp
   </textstring>
   <textstring name="PortraitID" >
      &lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-16&quot;?&gt;&lt;ContentIdentifier xmlns:i=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xmlns=&quot;http://schemas.datacontract.org/2004/07/WotC.ContentVault&quot;&gt;&lt;ContentID&gt;10000150&lt;/ContentID&gt;&lt;Official&gt;true&lt;/Official&gt;&lt;OfficialTypeID i:nil=&quot;true&quot; /&gt;&lt;ScratchID i:nil=&quot;true&quot; /&gt;&lt;TypeID&gt;2&lt;/TypeID&gt;&lt;/ContentIdentifier&gt;
   </textstring>
   <textstring name="PortraitExplicitlySet" >
      True
   </textstring>
   <textstring name="_Portrait_Position_" >
      0 0 0.899999976158142 0.899999976158142
   </textstring>
   <textstring name="Height" >
      5&apos;7&quot;
   </textstring>
   <textstring name="Weight" >
      170
   </textstring>
   <textstring name="Age" >
      24
   </textstring>
   <textstring name="Custom Character Portrait" >
      
   </textstring>
   <textstring name="name" >
      Cliff
   </textstring>
   <textstring name="_INTERNAL_VersatileUsedTwoHanded" >
      0
   </textstring>
   <textstring name="Experience Points" >
      32000
   </textstring>
   <textstring name="_PER_LEVEL_2_Carried Money" >
      709 gp; 185 sp; 28 cp
   </textstring>
   <textstring name="_PER_LEVEL_2_Stored Money" >
      0 gp
   </textstring>
   <textstring name="_PER_LEVEL_2_Residuum" >
      0
   </textstring>
   <textstring name="_PER_LEVEL_3_Carried Money" >
      709 gp; 185 sp; 28 cp
   </textstring>
   <textstring name="_PER_LEVEL_3_Stored Money" >
      0 gp
   </textstring>
   <textstring name="_PER_LEVEL_3_Residuum" >
      0
   </textstring>
   <textstring name="_PER_LEVEL_4_Carried Money" >
      709 gp; 185 sp; 28 cp
   </textstring>
   <textstring name="_PER_LEVEL_4_Stored Money" >
      0 gp
   </textstring>
   <textstring name="_PER_LEVEL_4_Residuum" >
      0
   </textstring>
   <textstring name="_PER_LEVEL_5_Carried Money" >
      19 pp; 60 gp; 7 sp; 8 cp
   </textstring>
   <textstring name="_PER_LEVEL_5_Stored Money" >
      0 gp
   </textstring>
   <textstring name="_PER_LEVEL_5_Residuum" >
      0
   </textstring>
   <textstring name="_PER_LEVEL_6_Carried Money" >
      29 pp; 58 gp; 7 sp; 8 cp
   </textstring>
   <textstring name="_PER_LEVEL_6_Stored Money" >
      0 gp
   </textstring>
   <textstring name="_PER_LEVEL_6_Residuum" >
      0
   </textstring>
   <textstring name="_PER_LEVEL_7_Carried Money" >
      24 pp; 80 gp; 8 cp
   </textstring>
   <textstring name="_PER_LEVEL_7_Stored Money" >
      0 gp
   </textstring>
   <textstring name="_PER_LEVEL_7_Residuum" >
      0
   </textstring>
   <textstring name="_PER_LEVEL_8_Carried Money" >
      24 pp; 10,080 gp; 8 cp
   </textstring>
   <textstring name="_PER_LEVEL_8_Stored Money" >
      0 gp
   </textstring>
   <textstring name="_PER_LEVEL_8_Residuum" >
      0
   </textstring>
   <textstring name="_PER_LEVEL_9_Carried Money" >
      10 pp; 389 gp; 8 cp
   </textstring>
   <textstring name="_PER_LEVEL_9_Stored Money" >
      4,490 pp
   </textstring>
   <textstring name="_PER_LEVEL_9_Residuum" >
      0
   </textstring>
   <textstring name="_PER_LEVEL_10_Carried Money" >
      8 pp; 309 gp; 8 cp
   </textstring>
   <textstring name="_PER_LEVEL_10_Stored Money" >
      4,680 pp
   </textstring>
   <textstring name="_PER_LEVEL_10_Residuum" >
      0
   </textstring>
   <textstring name="Campaign Notes" >
      
   </textstring>
   <textstring name="_PER_LEVEL_11_Carried Money" >
      8 pp; 309 gp; 8 cp
   </textstring>
   <textstring name="_PER_LEVEL_11_Stored Money" >
      4,680 pp
   </textstring>
   <textstring name="_PER_LEVEL_11_Residuum" >
      0
   </textstring>
   <textstring name="_INTERNAL_MainHandWeapon" >
      Dynamic Short spear +3
   </textstring>
   <textstring name="_PER_LEVEL_12_Carried Money" >
      8 pp; 309 gp; 8 cp
   </textstring>
   <textstring name="_PER_LEVEL_12_Stored Money" >
      4,680 pp
   </textstring>
   <textstring name="_PER_LEVEL_12_Residuum" >
      0
   </textstring>
   <textstring name="_ItemsShowOnPowerCards_" >
      Dynamic Short spear +3
   </textstring>


</D20Character>

`