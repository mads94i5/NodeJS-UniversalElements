<script>
    import TableElement from "./TableElement.svelte";
    import { createEventDispatcher } from "svelte";

    export let elements;
    const e_57_70 = {};
    e_57_70.symbol = "*";
    e_57_70.name = "57-70";
    e_57_70.ionizationEnergy = [""];
    e_57_70.series = "description";
    const e_89_102 = {};
    e_89_102.symbol = "**";
    e_89_102.name = "89-102";
    e_89_102.ionizationEnergy = [""];
    e_89_102.series = "description";
    const e_121_138 = {};
    e_121_138.symbol = "***";
    e_121_138.name = "121-138";
    e_121_138.ionizationEnergy = [""];
    e_121_138.series = "description";
    const e_139_152 = {};
    e_139_152.symbol = "****";
    e_139_152.name = "139-152";
    e_139_152.ionizationEnergy = [""];
    e_139_152.series = "description";

    const dispatch = createEventDispatcher();

    function handleElementClick(event) {
        const { element } = event.detail;
        dispatch("elementSelected", { element });
    }
</script>

{#if elements && elements.length > 0}
    <div class="periodic-table horizontal-scrollable-content blue-border">
        <div class="table-container">
            <table>
                <tr>
                    <th />
                    <th class="white-border">1<br />IA<br />IA<br /></th>
                    <th class="white-border">2<br />IIA<br />IIA<br /></th>
                    <th class="white-border" />
                    <th class="white-border" />
                    <th class="white-border">3<br />IIIA<br />IIIB<br /></th>
                    <th class="white-border">4<br />IVA<br />IVB<br /></th>
                    <th class="white-border">5<br />VA<br />VB<br /></th>
                    <th class="white-border">6<br />VIA<br />VIB<br /></th>
                    <th class="white-border">7<br />VIIA<br />VIIB<br /></th>
                    <th class="white-border">8<br />VIII<br />VIIIB<br /></th>
                    <th class="white-border">9<br />VIII<br />VIIIB<br /></th>
                    <th class="white-border">10<br />VIII<br />VIIIB<br /></th>
                    <th class="white-border">11<br />IB<br />IB<br /></th>
                    <th class="white-border">12<br />IIB<br />IIB<br /></th>
                    <th class="white-border">13<br />IIIB<br />IIIA<br /></th>
                    <th class="white-border">14<br />IVB<br />IVA<br /></th>
                    <th class="white-border">15<br />VB<br />VA<br /></th>
                    <th class="white-border">16<br />VIB<br />VIA<br /></th>
                    <th class="white-border">17<br />VIIB<br />VIIA<br /></th>
                    <th class="white-border">18<br />0<br />VIIIA<br /></th>
                </tr>
                <tr>
                    <td class="tbl-padding white-border"><strong>1</strong></td>
                    <td><TableElement bind:element={elements[0]} on:elementClicked={handleElementClick} /></td>
                    <td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td />
                    <td><TableElement bind:element={elements[1]} on:elementClicked={handleElementClick} /></td>
                </tr>
                <tr>
                    <td class="tbl-padding white-border"><strong>2</strong></td>
                    <td><TableElement bind:element={elements[2]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[3]} on:elementClicked={handleElementClick} /></td>
                    <td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td />
                    <td><TableElement bind:element={elements[4]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[5]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[6]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[7]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[8]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[9]} on:elementClicked={handleElementClick} /></td>
                </tr>
                <tr>
                    <td class="tbl-padding white-border"><strong>3</strong></td>
                    <td><TableElement bind:element={elements[10]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[11]} on:elementClicked={handleElementClick} /></td>
                    <td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td />
                    <td><TableElement bind:element={elements[12]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[13]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[14]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[15]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[16]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[17]} on:elementClicked={handleElementClick} /></td>
                </tr>
                <tr>
                    <td class="tbl-padding white-border"><strong>4</strong></td>
                    <td><TableElement bind:element={elements[18]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[19]} on:elementClicked={handleElementClick} /></td>
                    <td /><td />
                    <td><TableElement bind:element={elements[20]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[21]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[22]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[23]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[24]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[25]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[26]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[27]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[28]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[29]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[30]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[31]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[32]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[33]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[34]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[35]} on:elementClicked={handleElementClick} /></td>
                </tr>
                <tr>
                    <td class="tbl-padding white-border"><strong>5</strong></td>
                    <td><TableElement bind:element={elements[36]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[37]} on:elementClicked={handleElementClick} /></td>
                    <td /><td />
                    <td><TableElement bind:element={elements[38]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[39]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[40]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[41]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[42]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[43]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[44]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[45]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[46]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[47]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[48]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[49]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[50]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[51]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[52]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[53]} on:elementClicked={handleElementClick} /></td>
                </tr>
                <tr>
                    <td class="tbl-padding white-border"><strong>6</strong></td>
                    <td><TableElement bind:element={elements[54]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[55]} on:elementClicked={handleElementClick} /></td>
                    <td />
                    <td><TableElement element={e_57_70} /></td>
                    <td><TableElement bind:element={elements[70]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[71]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[72]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[73]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[74]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[75]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[76]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[77]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[78]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[79]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[80]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[81]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[82]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[83]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[84]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[85]} on:elementClicked={handleElementClick} /></td>
                </tr>
                <tr>
                    <td class="tbl-padding white-border"><strong>7</strong></td>
                    <td><TableElement bind:element={elements[86]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[87]} on:elementClicked={handleElementClick} /></td>
                    <td />
                    <td><TableElement element={e_89_102} /></td>
                    <td><TableElement bind:element={elements[102]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[103]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[104]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[105]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[106]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[107]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[108]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[109]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[110]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[111]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[112]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[113]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[114]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[115]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[116]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[117]} on:elementClicked={handleElementClick} /></td>
                </tr>
                <tr>
                    <td class="tbl-padding white-border"><strong>8</strong></td>
                    <td><TableElement bind:element={elements[118]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[119]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement element={e_121_138} /></td>
                    <td><TableElement element={e_139_152} /></td>
                    <td><TableElement bind:element={elements[152]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[153]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[154]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[155]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[156]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[157]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[158]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[159]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[160]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[161]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[162]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[163]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[164]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[165]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[166]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[167]} on:elementClicked={handleElementClick} /></td>
                </tr>
            </table>
        </div>
        <br />
        <div class="table-container" style="justify-content: right;">
            <table>
                <tr>
                    <td class="tbl-padding white-border"><strong>6</strong></td>
                    <td><TableElement element={e_57_70} /></td>
                    <td><TableElement bind:element={elements[56]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[57]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[58]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[59]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[60]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[61]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[62]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[63]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[64]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[65]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[66]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[67]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[68]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[69]} on:elementClicked={handleElementClick} /></td>
                </tr>
                <tr>
                    <td class="tbl-padding white-border"><strong>7</strong></td>
                    <td><TableElement element={e_89_102} /></td>
                    <td><TableElement bind:element={elements[88]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[89]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[90]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[91]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[92]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[93]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[94]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[95]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[96]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[97]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[98]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[99]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[100]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[101]} on:elementClicked={handleElementClick} /></td>
                </tr>
                <tr>
                    <td class="tbl-padding white-border"><strong>8</strong></td>
                    <td><TableElement element={e_121_138} /></td>
                    <td><TableElement bind:element={elements[120]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[121]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[122]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[123]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[124]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[125]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[126]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[127]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[128]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[129]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[130]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[131]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[132]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[133]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[134]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[135]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[136]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[137]} on:elementClicked={handleElementClick} /></td>
                </tr>
                <tr>
                    <td class="tbl-padding white-border"><strong>8</strong></td>
                    <td><TableElement element={e_139_152} /></td>
                    <td><TableElement bind:element={elements[138]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[139]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[140]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[141]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[142]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[143]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[144]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[145]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[146]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[147]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[148]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[149]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[150]} on:elementClicked={handleElementClick} /></td>
                    <td><TableElement bind:element={elements[151]} on:elementClicked={handleElementClick} /></td>
                </tr>
            </table>
        </div>
    </div>
{/if}