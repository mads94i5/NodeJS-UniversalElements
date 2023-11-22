<script>
    import TableElement from "./TableElement.svelte";

    export let elements;
    const e_57_70 = {};
    e_57_70.symbol = "*";
    e_57_70.name = "57-70";
    e_57_70.ionizationEnergy = [ "" ];
    const e_89_102 = {};
    e_89_102.symbol = "**";
    e_89_102.name = "89-102";
    e_89_102.ionizationEnergy = [ "" ];
    const e_121_138 = {};
    e_121_138.symbol = "***";
    e_121_138.name = "121-138";
    e_121_138.ionizationEnergy = [ "" ];
    const e_139_152 = {};
    e_139_152.symbol = "****";
    e_139_152.name = "139-152";
    e_139_152.ionizationEnergy = [ "" ];
    const style1 = "color: white; background-color: green; border: 2px solid darkgreen";
    const style2 = "color: white; background-color: goldenrod; border: 2px solid darkgoldenrod";
    const style3 = "color: white; background-color: chocolate; border: 2px solid brown";
    const style4 = "color: white; background-color: crimson; border: 2px solid darkred";
    const style5 = "color: white; background-color: steelblue; border: 2px solid darkslategrey";
    const style6 = "color: white; background-color: darkcyan; border: 2px solid darkslategrey";
    const style7 = "color: white; background-color: darkviolet; border: 2px solid purple";
    const style8 = "color: white; background-color: brown; border: 2px solid saddlebrown";
    const style9 = "color: white; background-color: salmon; border: 2px solid crimson";
    const style10 = "color: white; background-color: dimgray; border: 2px solid lightslategray";
    const style11 = "color: white; background-color: transparent; border: 2px solid navy";
    const elementStyles = {
        e1: style1, e2: style7,
        e3: style2, e4: style3, e5: style6, e6: style1, e7: style1, e8: style1, e9: style1, e10: style7,
        e11: style2, e12: style3, e13: style5, e14: style6, e15: style1, e16: style1, e17: style1, e18: style7,
        e19: style2, e20: style3, e21: style4, e22: style4, e23: style4, e24: style4, e25: style4, e26: style4, e27: style4, 
        e28: style4, e29: style4, e30: style4, e31: style5, e32: style6, e33: style6, e34: style1, e35: style1, e36: style7,
        e37: style2, e38: style3, e39: style4, e40: style4, e41: style4, e42: style4, e43: style4, e44: style4, e45: style4,
        e46: style4, e47: style4, e48: style4, e49: style5, e50: style5, e51: style6, e52: style6, e53: style1, e54: style7,
        e55: style2, e56: style3, e57: style8, e58: style8, e59: style8, e60: style8, e61: style8, e62: style8, e63: style8,
        e64: style8, e65: style8, e66: style8, e67: style8, e68: style8, e69: style8, e70: style8, e71: style8, e72: style4,
        e73: style4, e74: style4, e75: style4, e76: style4, e77: style4, e78: style4, e79: style4, e80: style4, e81: style5,
        e82: style5, e83: style5, e84: style5, e85: style6, e86: style7,
        e87: style2, e88: style3, e89: style9, e90: style9, e91: style9, e92: style9, e93: style9, e94: style9, e95: style9,
        e96: style9, e97: style9, e98: style9, e99: style9, e100: style9, e101: style9, e102: style9, e103: style9, e104: style4,
        e105: style4, e106: style4, e107: style4, e108: style4, e109: style11, e110: style11, e111: style11, e112: style11, e113: style11,
        e114: style11, e115: style11, e116: style11, e117: style11, e118: style11,
        e119: style11, e120: style11, e121: style11, e122: style11, e123: style11, e124: style11, e125: style11, e126: style11,
        e127: style11, e128: style11, e129: style11, e130: style11, e131: style11, e132: style11, e133: style11, e134: style11,
        e135: style11, e136: style11, e137: style11, e138: style11, e139: style11, e140: style11, e141: style11, e142: style11,
        e143: style11, e144: style11, e145: style11, e146: style11, e147: style11, e148: style11, e149: style11, e150: style11,
        e151: style11, e152: style11, e153: style11, e154: style11, e155: style11, e156: style11, e157: style11, e158: style11,
        e159: style11, e160: style11, e161: style11, e162: style11, e163: style11, e164: style11, e165: style11, e166: style11,
        e167: style11, e168: style11,
    }
</script>

{#if elements && elements.length > 0}
    <div class="table-container" style="justify-content: right;">
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
                <td><TableElement bind:element={elements[0]} bind:customStyles={elementStyles.e1} /></td>
                <td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td />
                <td><TableElement bind:element={elements[1]} bind:customStyles={elementStyles.e2} /></td>
            </tr>
            <tr>
                <td class="tbl-padding white-border"><strong>2</strong></td>
                <td><TableElement bind:element={elements[2]} bind:customStyles={elementStyles.e3} /></td>
                <td><TableElement bind:element={elements[3]} bind:customStyles={elementStyles.e4} /></td>
                <td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td />
                <td><TableElement bind:element={elements[4]} bind:customStyles={elementStyles.e5} /></td>
                <td><TableElement bind:element={elements[5]} bind:customStyles={elementStyles.e6} /></td>
                <td><TableElement bind:element={elements[6]} bind:customStyles={elementStyles.e7} /></td>
                <td><TableElement bind:element={elements[7]} bind:customStyles={elementStyles.e8} /></td>
                <td><TableElement bind:element={elements[8]} bind:customStyles={elementStyles.e9} /></td>
                <td><TableElement bind:element={elements[9]} bind:customStyles={elementStyles.e10} /></td>
            </tr>
            <tr>
                <td class="tbl-padding white-border"><strong>3</strong></td>
                <td><TableElement bind:element={elements[10]} bind:customStyles={elementStyles.e11} /></td>
                <td><TableElement bind:element={elements[11]} bind:customStyles={elementStyles.e12} /></td>
                <td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td />
                <td><TableElement bind:element={elements[12]} bind:customStyles={elementStyles.e13} /></td>
                <td><TableElement bind:element={elements[13]} bind:customStyles={elementStyles.e14} /></td>
                <td><TableElement bind:element={elements[14]} bind:customStyles={elementStyles.e15} /></td>
                <td><TableElement bind:element={elements[15]} bind:customStyles={elementStyles.e16} /></td>
                <td><TableElement bind:element={elements[16]} bind:customStyles={elementStyles.e17} /></td>
                <td><TableElement bind:element={elements[17]} bind:customStyles={elementStyles.e18} /></td>
            </tr>
            <tr>
                <td class="tbl-padding white-border"><strong>4</strong></td>
                <td><TableElement bind:element={elements[18]} bind:customStyles={elementStyles.e19} /></td>
                <td><TableElement bind:element={elements[19]} bind:customStyles={elementStyles.e20} /></td>
                <td /><td />
                <td><TableElement bind:element={elements[20]} bind:customStyles={elementStyles.e21} /></td>
                <td><TableElement bind:element={elements[21]} bind:customStyles={elementStyles.e22} /></td>
                <td><TableElement bind:element={elements[22]} bind:customStyles={elementStyles.e23} /></td>
                <td><TableElement bind:element={elements[23]} bind:customStyles={elementStyles.e24} /></td>
                <td><TableElement bind:element={elements[24]} bind:customStyles={elementStyles.e25} /></td>
                <td><TableElement bind:element={elements[25]} bind:customStyles={elementStyles.e26} /></td>
                <td><TableElement bind:element={elements[26]} bind:customStyles={elementStyles.e27} /></td>
                <td><TableElement bind:element={elements[27]} bind:customStyles={elementStyles.e28} /></td>
                <td><TableElement bind:element={elements[28]} bind:customStyles={elementStyles.e29} /></td>
                <td><TableElement bind:element={elements[29]} bind:customStyles={elementStyles.e30} /></td>
                <td><TableElement bind:element={elements[30]} bind:customStyles={elementStyles.e31} /></td>
                <td><TableElement bind:element={elements[31]} bind:customStyles={elementStyles.e32} /></td>
                <td><TableElement bind:element={elements[32]} bind:customStyles={elementStyles.e33} /></td>
                <td><TableElement bind:element={elements[33]} bind:customStyles={elementStyles.e34} /></td>
                <td><TableElement bind:element={elements[34]} bind:customStyles={elementStyles.e35} /></td>
                <td><TableElement bind:element={elements[35]} bind:customStyles={elementStyles.e36} /></td>
            </tr>
            <tr>
                <td class="tbl-padding white-border"><strong>5</strong></td>
                <td><TableElement bind:element={elements[36]} bind:customStyles={elementStyles.e37} /></td>
                <td><TableElement bind:element={elements[37]} bind:customStyles={elementStyles.e38} /></td>
                <td /><td />
                <td><TableElement bind:element={elements[38]} bind:customStyles={elementStyles.e39} /></td>
                <td><TableElement bind:element={elements[39]} bind:customStyles={elementStyles.e40} /></td>
                <td><TableElement bind:element={elements[40]} bind:customStyles={elementStyles.e41} /></td>
                <td><TableElement bind:element={elements[41]} bind:customStyles={elementStyles.e42} /></td>
                <td><TableElement bind:element={elements[42]} bind:customStyles={elementStyles.e43} /></td>
                <td><TableElement bind:element={elements[43]} bind:customStyles={elementStyles.e44} /></td>
                <td><TableElement bind:element={elements[44]} bind:customStyles={elementStyles.e45} /></td>
                <td><TableElement bind:element={elements[45]} bind:customStyles={elementStyles.e46} /></td>
                <td><TableElement bind:element={elements[46]} bind:customStyles={elementStyles.e47} /></td>
                <td><TableElement bind:element={elements[47]} bind:customStyles={elementStyles.e48} /></td>
                <td><TableElement bind:element={elements[48]} bind:customStyles={elementStyles.e49} /></td>
                <td><TableElement bind:element={elements[49]} bind:customStyles={elementStyles.e50} /></td>
                <td><TableElement bind:element={elements[50]} bind:customStyles={elementStyles.e51} /></td>
                <td><TableElement bind:element={elements[51]} bind:customStyles={elementStyles.e52} /></td>
                <td><TableElement bind:element={elements[52]} bind:customStyles={elementStyles.e53} /></td>
                <td><TableElement bind:element={elements[53]} bind:customStyles={elementStyles.e54} /></td>
            </tr>
            <tr>
                <td class="tbl-padding white-border"><strong>6</strong></td>
                <td><TableElement bind:element={elements[54]} bind:customStyles={elementStyles.e55} /></td>
                <td><TableElement bind:element={elements[55]} bind:customStyles={elementStyles.e56} /></td>
                <td />
                <td><TableElement element={e_57_70} customStyles={style10} /></td>
                <td><TableElement bind:element={elements[70]} bind:customStyles={elementStyles.e71} /></td>
                <td><TableElement bind:element={elements[71]} bind:customStyles={elementStyles.e72} /></td>
                <td><TableElement bind:element={elements[72]} bind:customStyles={elementStyles.e73} /></td>
                <td><TableElement bind:element={elements[73]} bind:customStyles={elementStyles.e74} /></td>
                <td><TableElement bind:element={elements[74]} bind:customStyles={elementStyles.e75} /></td>
                <td><TableElement bind:element={elements[75]} bind:customStyles={elementStyles.e76} /></td>
                <td><TableElement bind:element={elements[76]} bind:customStyles={elementStyles.e77} /></td>
                <td><TableElement bind:element={elements[77]} bind:customStyles={elementStyles.e78} /></td>
                <td><TableElement bind:element={elements[78]} bind:customStyles={elementStyles.e79} /></td>
                <td><TableElement bind:element={elements[79]} bind:customStyles={elementStyles.e80} /></td>
                <td><TableElement bind:element={elements[80]} bind:customStyles={elementStyles.e81} /></td>
                <td><TableElement bind:element={elements[81]} bind:customStyles={elementStyles.e82} /></td>
                <td><TableElement bind:element={elements[82]} bind:customStyles={elementStyles.e83} /></td>
                <td><TableElement bind:element={elements[83]} bind:customStyles={elementStyles.e84} /></td>
                <td><TableElement bind:element={elements[84]} bind:customStyles={elementStyles.e85} /></td>
                <td><TableElement bind:element={elements[85]} bind:customStyles={elementStyles.e86} /></td>
            </tr>
            <tr>
                <td class="tbl-padding white-border"><strong>7</strong></td>
                <td><TableElement bind:element={elements[86]} bind:customStyles={elementStyles.e87} /></td>
                <td><TableElement bind:element={elements[87]} bind:customStyles={elementStyles.e88} /></td>
                <td />
                <td><TableElement element={e_89_102} customStyles={style10} /></td>
                <td><TableElement bind:element={elements[102]} bind:customStyles={elementStyles.e103} /></td>
                <td><TableElement bind:element={elements[103]} bind:customStyles={elementStyles.e104} /></td>
                <td><TableElement bind:element={elements[104]} bind:customStyles={elementStyles.e105} /></td>
                <td><TableElement bind:element={elements[105]} bind:customStyles={elementStyles.e106} /></td>
                <td><TableElement bind:element={elements[106]} bind:customStyles={elementStyles.e107} /></td>
                <td><TableElement bind:element={elements[107]} bind:customStyles={elementStyles.e108} /></td>
                <td><TableElement bind:element={elements[108]} bind:customStyles={elementStyles.e109} /></td>
                <td><TableElement bind:element={elements[109]} bind:customStyles={elementStyles.e110} /></td>
                <td><TableElement bind:element={elements[110]} bind:customStyles={elementStyles.e111} /></td>
                <td><TableElement bind:element={elements[111]} bind:customStyles={elementStyles.e112} /></td>
                <td><TableElement bind:element={elements[112]} bind:customStyles={elementStyles.e113} /></td>
                <td><TableElement bind:element={elements[113]} bind:customStyles={elementStyles.e114} /></td>
                <td><TableElement bind:element={elements[114]} bind:customStyles={elementStyles.e115} /></td>
                <td><TableElement bind:element={elements[115]} bind:customStyles={elementStyles.e116} /></td>
                <td><TableElement bind:element={elements[116]} bind:customStyles={elementStyles.e117} /></td>
                <td><TableElement bind:element={elements[117]} bind:customStyles={elementStyles.e118} /></td>
            </tr>
            <tr>
                <td class="tbl-padding white-border"><strong>8</strong></td>
                <td><TableElement bind:element={elements[118]} bind:customStyles={elementStyles.e119} /></td>
                <td><TableElement bind:element={elements[119]} bind:customStyles={elementStyles.e120} /></td>
                <td><TableElement element={e_121_138} customStyles={style10} /></td>
                <td><TableElement element={e_139_152} customStyles={style10} /></td>
                <td><TableElement bind:element={elements[152]} bind:customStyles={elementStyles.e153} /></td>
                <td><TableElement bind:element={elements[153]} bind:customStyles={elementStyles.e154} /></td>
                <td><TableElement bind:element={elements[154]} bind:customStyles={elementStyles.e155} /></td>
                <td><TableElement bind:element={elements[155]} bind:customStyles={elementStyles.e156} /></td>
                <td><TableElement bind:element={elements[156]} bind:customStyles={elementStyles.e157} /></td>
                <td><TableElement bind:element={elements[157]} bind:customStyles={elementStyles.e158} /></td>
                <td><TableElement bind:element={elements[158]} bind:customStyles={elementStyles.e159} /></td>
                <td><TableElement bind:element={elements[159]} bind:customStyles={elementStyles.e160} /></td>
                <td><TableElement bind:element={elements[160]} bind:customStyles={elementStyles.e161} /></td>
                <td><TableElement bind:element={elements[161]} bind:customStyles={elementStyles.e162} /></td>
                <td><TableElement bind:element={elements[162]} bind:customStyles={elementStyles.e163} /></td>
                <td><TableElement bind:element={elements[163]} bind:customStyles={elementStyles.e164} /></td>
                <td><TableElement bind:element={elements[164]} bind:customStyles={elementStyles.e165} /></td>
                <td><TableElement bind:element={elements[165]} bind:customStyles={elementStyles.e166} /></td>
                <td><TableElement bind:element={elements[166]} bind:customStyles={elementStyles.e167} /></td>
                <td><TableElement bind:element={elements[167]} bind:customStyles={elementStyles.e168} /></td>
            </tr>
        </table>
    </div>

    <div class="table-container" style="justify-content: right;">
        <table>
            <tr>
                <td class="tbl-padding white-border"><strong>6</strong></td>
                <td><TableElement element={e_57_70} customStyles={style10} /></td>
                <td><TableElement bind:element={elements[56]} bind:customStyles={elementStyles.e57} /></td>
                <td><TableElement bind:element={elements[57]} bind:customStyles={elementStyles.e58} /></td>
                <td><TableElement bind:element={elements[58]} bind:customStyles={elementStyles.e59} /></td>
                <td><TableElement bind:element={elements[59]} bind:customStyles={elementStyles.e60} /></td>
                <td><TableElement bind:element={elements[60]} bind:customStyles={elementStyles.e61} /></td>
                <td><TableElement bind:element={elements[61]} bind:customStyles={elementStyles.e62} /></td>
                <td><TableElement bind:element={elements[62]} bind:customStyles={elementStyles.e63} /></td>
                <td><TableElement bind:element={elements[63]} bind:customStyles={elementStyles.e64} /></td>
                <td><TableElement bind:element={elements[64]} bind:customStyles={elementStyles.e65} /></td>
                <td><TableElement bind:element={elements[65]} bind:customStyles={elementStyles.e66} /></td>
                <td><TableElement bind:element={elements[66]} bind:customStyles={elementStyles.e67} /></td>
                <td><TableElement bind:element={elements[67]} bind:customStyles={elementStyles.e68} /></td>
                <td><TableElement bind:element={elements[68]} bind:customStyles={elementStyles.e69} /></td>
                <td><TableElement bind:element={elements[69]} bind:customStyles={elementStyles.e70} /></td>
            </tr>
            <tr>
                <td class="tbl-padding white-border"><strong>7</strong></td>
                <td><TableElement element={e_89_102} customStyles={style10} /></td>
                <td><TableElement bind:element={elements[88]} bind:customStyles={elementStyles.e89} /></td>
                <td><TableElement bind:element={elements[89]} bind:customStyles={elementStyles.e90} /></td>
                <td><TableElement bind:element={elements[90]} bind:customStyles={elementStyles.e91} /></td>
                <td><TableElement bind:element={elements[91]} bind:customStyles={elementStyles.e92} /></td>
                <td><TableElement bind:element={elements[92]} bind:customStyles={elementStyles.e93} /></td>
                <td><TableElement bind:element={elements[93]} bind:customStyles={elementStyles.e94} /></td>
                <td><TableElement bind:element={elements[94]} bind:customStyles={elementStyles.e95} /></td>
                <td><TableElement bind:element={elements[95]} bind:customStyles={elementStyles.e96} /></td>
                <td><TableElement bind:element={elements[96]} bind:customStyles={elementStyles.e97} /></td>
                <td><TableElement bind:element={elements[97]} bind:customStyles={elementStyles.e98} /></td>
                <td><TableElement bind:element={elements[98]} bind:customStyles={elementStyles.e99} /></td>
                <td><TableElement bind:element={elements[99]} bind:customStyles={elementStyles.e100} /></td>
                <td><TableElement bind:element={elements[100]} bind:customStyles={elementStyles.e101} /></td>
                <td><TableElement bind:element={elements[101]} bind:customStyles={elementStyles.e102} /></td>
            </tr>
            <tr>
                <td class="tbl-padding white-border"><strong>8</strong></td>
                <td><TableElement element={e_121_138} customStyles={style10} /></td>
                <td><TableElement bind:element={elements[120]} bind:customStyles={elementStyles.e121} /></td>
                <td><TableElement bind:element={elements[121]} bind:customStyles={elementStyles.e122} /></td>
                <td><TableElement bind:element={elements[122]} bind:customStyles={elementStyles.e123} /></td>
                <td><TableElement bind:element={elements[123]} bind:customStyles={elementStyles.e124} /></td>
                <td><TableElement bind:element={elements[124]} bind:customStyles={elementStyles.e125} /></td>
                <td><TableElement bind:element={elements[125]} bind:customStyles={elementStyles.e126} /></td>
                <td><TableElement bind:element={elements[126]} bind:customStyles={elementStyles.e127} /></td>
                <td><TableElement bind:element={elements[127]} bind:customStyles={elementStyles.e128} /></td>
                <td><TableElement bind:element={elements[128]} bind:customStyles={elementStyles.e129} /></td>
                <td><TableElement bind:element={elements[129]} bind:customStyles={elementStyles.e130} /></td>
                <td><TableElement bind:element={elements[130]} bind:customStyles={elementStyles.e131} /></td>
                <td><TableElement bind:element={elements[131]} bind:customStyles={elementStyles.e132} /></td>
                <td><TableElement bind:element={elements[132]} bind:customStyles={elementStyles.e133} /></td>
                <td><TableElement bind:element={elements[133]} bind:customStyles={elementStyles.e134} /></td>
                <td><TableElement bind:element={elements[134]} bind:customStyles={elementStyles.e135} /></td>
                <td><TableElement bind:element={elements[135]} bind:customStyles={elementStyles.e136} /></td>
                <td><TableElement bind:element={elements[136]} bind:customStyles={elementStyles.e137} /></td>
                <td><TableElement bind:element={elements[137]} bind:customStyles={elementStyles.e138} /></td>
            </tr>
            <tr>
                <td class="tbl-padding white-border"><strong>8</strong></td>
                <td><TableElement element={e_139_152} customStyles={style10} /></td>
                <td><TableElement bind:element={elements[138]} bind:customStyles={elementStyles.e139} /></td>
                <td><TableElement bind:element={elements[139]} bind:customStyles={elementStyles.e140} /></td>
                <td><TableElement bind:element={elements[140]} bind:customStyles={elementStyles.e141} /></td>
                <td><TableElement bind:element={elements[141]} bind:customStyles={elementStyles.e142} /></td>
                <td><TableElement bind:element={elements[142]} bind:customStyles={elementStyles.e143} /></td>
                <td><TableElement bind:element={elements[143]} bind:customStyles={elementStyles.e144} /></td>
                <td><TableElement bind:element={elements[144]} bind:customStyles={elementStyles.e145} /></td>
                <td><TableElement bind:element={elements[145]} bind:customStyles={elementStyles.e146} /></td>
                <td><TableElement bind:element={elements[146]} bind:customStyles={elementStyles.e147} /></td>
                <td><TableElement bind:element={elements[147]} bind:customStyles={elementStyles.e148} /></td>
                <td><TableElement bind:element={elements[148]} bind:customStyles={elementStyles.e149} /></td>
                <td><TableElement bind:element={elements[149]} bind:customStyles={elementStyles.e150} /></td>
                <td><TableElement bind:element={elements[150]} bind:customStyles={elementStyles.e151} /></td>
                <td><TableElement bind:element={elements[151]} bind:customStyles={elementStyles.e152} /></td>
            </tr>
        </table>
    </div>
{:else}
    <div class="table-container">
        <div>No elements found</div>
    </div>
{/if}
