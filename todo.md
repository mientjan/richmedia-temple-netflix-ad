build / dev without options
clear the build
rename bundle.zip to WidthxHeight_Platform.zip
build sizes selectable
fix weborama name without - but _


=IF(B8 != 1, '', ROWS(VLOOKUP(A8,OtherPeopleData!B:D,1, FALSE)))

=QUERY(OtherPeople!A:BE,"SELECT sum(Z) where B = '"&B3&"' and (Z > 0 or AA > 0 or AB > 0 or AC > 0) label sum(Z) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (Z > 0 or AA > 0 or AB > 0 or AC > 0) label B ''"))
=QUERY(OtherPeople!A:BE,"SELECT sum(AA) where B = '"&B3&"' and (Z > 0 or AA > 0 or AB > 0 or AC > 0) label sum(AA) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (Z > 0 or AA > 0 or AB > 0 or AC > 0) label B ''"))
=QUERY(OtherPeople!A:BE,"SELECT sum(AB) where B = '"&B3&"' and (Z > 0 or AA > 0 or AB > 0 or AC > 0) label sum(AB) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (Z > 0 or AA > 0 or AB > 0 or AC > 0) label B ''"))
=QUERY(OtherPeople!A:BE,"SELECT sum(AC) where B = '"&B3&"' and (Z > 0 or AA > 0 or AB > 0 or AC > 0) label sum(AC) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (Z > 0 or AA > 0 or AB > 0 or AC > 0) label B ''"))

=QUERY(OtherPeople!A:BE,"SELECT sum(AD) where B = '"&B3&"' and (AD > 0 or AE > 0 or AF > 0 or AG > 0) label sum(AD) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (AD > 0 or AE > 0 or AF > 0 or AG > 0) label B ''"))
=QUERY(OtherPeople!A:BE,"SELECT sum(AE) where B = '"&B3&"' and (AD > 0 or AE > 0 or AF > 0 or AG > 0) label sum(AE) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (AD > 0 or AE > 0 or AF > 0 or AG > 0) label B ''"))
=QUERY(OtherPeople!A:BE,"SELECT sum(AF) where B = '"&B3&"' and (AD > 0 or AE > 0 or AF > 0 or AG > 0) label sum(AF) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (AD > 0 or AE > 0 or AF > 0 or AG > 0) label B ''"))
=QUERY(OtherPeople!A:BE,"SELECT sum(AG) where B = '"&B3&"' and (AD > 0 or AE > 0 or AF > 0 or AG > 0) label sum(AG) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (AD > 0 or AE > 0 or AF > 0 or AG > 0) label B ''"))

=QUERY(OtherPeople!A:BE,"SELECT sum(AH) where B = '"&B3&"' and (AH > 0 or AI > 0 or AJ > 0 or AK > 0) label sum(AH) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (AH > 0 or AI > 0 or AJ > 0 or AK > 0) label B ''"))
=QUERY(OtherPeople!A:BE,"SELECT sum(AI) where B = '"&B3&"' and (AH > 0 or AI > 0 or AJ > 0 or AK > 0) label sum(AI) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (AH > 0 or AI > 0 or AJ > 0 or AK > 0) label B ''"))
=QUERY(OtherPeople!A:BE,"SELECT sum(AJ) where B = '"&B3&"' and (AH > 0 or AI > 0 or AJ > 0 or AK > 0) label sum(AJ) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (AH > 0 or AI > 0 or AJ > 0 or AK > 0) label B ''"))
=QUERY(OtherPeople!A:BE,"SELECT sum(AK) where B = '"&B3&"' and (AH > 0 or AI > 0 or AJ > 0 or AK > 0) label sum(AK) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (AH > 0 or AI > 0 or AJ > 0 or AK > 0) label B ''"))

=QUERY(OtherPeople!A:BE,"SELECT sum(AL) where B = '"&B3&"' and (AL > 0 or AM > 0 or AN > 0 or AO > 0) label sum(AL) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (AL > 0 or AM > 0 or AN > 0 or AO > 0) label B ''"))
=QUERY(OtherPeople!A:BE,"SELECT sum(AM) where B = '"&B3&"' and (AL > 0 or AM > 0 or AN > 0 or AO > 0) label sum(AM) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (AL > 0 or AM > 0 or AN > 0 or AO > 0) label B ''"))
=QUERY(OtherPeople!A:BE,"SELECT sum(AN) where B = '"&B3&"' and (AL > 0 or AM > 0 or AN > 0 or AO > 0) label sum(AN) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (AL > 0 or AM > 0 or AN > 0 or AO > 0) label B ''"))
=QUERY(OtherPeople!A:BE,"SELECT sum(AO) where B = '"&B3&"' and (AL > 0 or AM > 0 or AN > 0 or AO > 0) label sum(AO) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (AL > 0 or AM > 0 or AN > 0 or AO > 0) label B ''"))

=QUERY(OtherPeople!A:BE,"SELECT sum(AP) where B = '"&B3&"' and (AP > 0 or AQ > 0 or AR > 0 or AS > 0) label sum(AP) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (AP > 0 or AQ > 0 or AR > 0 or AS > 0) label B ''"))
=QUERY(OtherPeople!A:BE,"SELECT sum(AQ) where B = '"&B3&"' and (AP > 0 or AQ > 0 or AR > 0 or AS > 0) label sum(AQ) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (AP > 0 or AQ > 0 or AR > 0 or AS > 0) label B ''"))
=QUERY(OtherPeople!A:BE,"SELECT sum(AR) where B = '"&B3&"' and (AP > 0 or AQ > 0 or AR > 0 or AS > 0) label sum(AR) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (AP > 0 or AQ > 0 or AR > 0 or AS > 0) label B ''"))
=QUERY(OtherPeople!A:BE,"SELECT sum(AS) where B = '"&B3&"' and (AP > 0 or AQ > 0 or AR > 0 or AS > 0) label sum(AS) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (AP > 0 or AQ > 0 or AR > 0 or AS > 0) label B ''"))

=QUERY(OtherPeople!A:BE,"SELECT sum(AT) where B = '"&B3&"' and (AT > 0 or AU > 0 or AV > 0 or AW > 0) label sum(AT) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (AT > 0 or AU > 0 or AV > 0 or AW > 0) label B ''"))
=QUERY(OtherPeople!A:BE,"SELECT sum(AU) where B = '"&B3&"' and (AT > 0 or AU > 0 or AV > 0 or AW > 0) label sum(AU) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (AT > 0 or AU > 0 or AV > 0 or AW > 0) label B ''"))
=QUERY(OtherPeople!A:BE,"SELECT sum(AV) where B = '"&B3&"' and (AT > 0 or AU > 0 or AV > 0 or AW > 0) label sum(AV) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (AT > 0 or AU > 0 or AV > 0 or AW > 0) label B ''"))
=QUERY(OtherPeople!A:BE,"SELECT sum(AW) where B = '"&B3&"' and (AT > 0 or AU > 0 or AV > 0 or AW > 0) label sum(AW) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (AT > 0 or AU > 0 or AV > 0 or AW > 0) label B ''"))

=QUERY(OtherPeople!A:BE,"SELECT sum(AX) where B = '"&B3&"' and (AX > 0 or AY > 0 or AZ > 0 or BA > 0) label sum(AX) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (AX > 0 or AY > 0 or AZ > 0 or BA > 0) label B ''"))
=QUERY(OtherPeople!A:BE,"SELECT sum(AY) where B = '"&B3&"' and (AX > 0 or AY > 0 or AZ > 0 or BA > 0) label sum(AY) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (AX > 0 or AY > 0 or AZ > 0 or BA > 0) label B ''"))
=QUERY(OtherPeople!A:BE,"SELECT sum(AZ) where B = '"&B3&"' and (AX > 0 or AY > 0 or AZ > 0 or BA > 0) label sum(AZ) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (AX > 0 or AY > 0 or AZ > 0 or BA > 0) label B ''"))
=QUERY(OtherPeople!A:BE,"SELECT sum(BA) where B = '"&B3&"' and (AX > 0 or AY > 0 or AZ > 0 or BA > 0) label sum(BA) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (AX > 0 or AY > 0 or AZ > 0 or BA > 0) label B ''"))

=QUERY(OtherPeople!A:BE,"SELECT sum(BB) where B = '"&B3&"' and (BB > 0 or BC > 0 or BD > 0 or BE > 0) label sum(BB) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (BB > 0 or BC > 0 or BD > 0 or BE > 0) label B ''"))
=QUERY(OtherPeople!A:BE,"SELECT sum(BC) where B = '"&B3&"' and (BB > 0 or BC > 0 or BD > 0 or BE > 0) label sum(BC) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (BB > 0 or BC > 0 or BD > 0 or BE > 0) label B ''"))
=QUERY(OtherPeople!A:BE,"SELECT sum(BD) where B = '"&B3&"' and (BB > 0 or BC > 0 or BD > 0 or BE > 0) label sum(BD) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (BB > 0 or BC > 0 or BD > 0 or BE > 0) label B ''"))
=QUERY(OtherPeople!A:BE,"SELECT sum(BE) where B = '"&B3&"' and (BB > 0 or BC > 0 or BD > 0 or BE > 0) label sum(BE) ''")/ROWS(QUERY(OtherPeople!A:BE,"SELECT B where B = '"&B3&"' and (BB > 0 or BC > 0 or BD > 0 or BE > 0) label B ''"))
