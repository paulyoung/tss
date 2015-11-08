// @flow
// Property.js

import type {
  AlignContent
  AlignItems
  AlignSelf
  All
  Animation
  AnimationDelay
  AnimationDirection
  AnimationDuration
  AnimationFillMode
  AnimationIterationCount
  AnimationName
  AnimationPlayState
  AnimationTimingFunction
  BackfaceVisibility
  Background
  BackgroundAttachment
  BackgroundBlendMode
  BackgroundClip
  BackgroundColor
  BackgroundImage
  BackgroundOrigin
  BackgroundPosition
  BackgroundRepeat
  BackgroundSize
  Border
  BorderBottom
  BorderBottomColor
  BorderBottomLeftRadius
  BorderBottomRightRadius
  BorderBottomStyle
  BorderBottomWidth
  BorderCollapse
  BorderColor
  BorderImage
  BorderImageOutset
  BorderImageRepeat
  BorderImageSlice
  BorderImageSource
  BorderImageWidth
  BorderLeft
  BorderLeftColor
  BorderLeftStyle
  BorderLeftWidth
  BorderRadius
  BorderRight
  BorderRightColor
  BorderRightStyle
  BorderRightWidth
  BorderSpacing
  BorderStyle
  BorderTop
  BorderTopColor
  BorderTopLeftRadius
  BorderTopRightRadius
  BorderTopStyle
  BorderTopWidth
  BorderWidth
  Bottom
  BoxShadow
  BoxSizing
  CaptionSide
  Clear
  Clip
  Color
  ColumnCount
  ColumnFill
  ColumnGap
  ColumnRule
  ColumnRuleColor
  ColumnRuleStyle
  ColumnRuleWidth
  ColumnSpan
  ColumnWidth
  Columns
  Content
  CounterIncrement
  CounterReset
  Cursor
  Direction
  Display
  EmptyCells
  Filter
  Flex
  FlexBasis
  FlexDirection
  FlexFlow
  FlexGrow
  FlexShrink
  FlexWrap
  Float
  Font
  FontFamily
  FontSize
  FontSizeAdjust
  FontStretch
  FontStyle
  FontVariant
  FontWeight
  HangingPunctuation
  Height
  JustifyContent
  Left
  LetterSpacing
  LineHeight
  ListStyle
  ListStyleImage
  ListStylePosition
  ListStyleType
  Margin
  MarginBottom
  MarginLeft
  MarginRight
  MarginTop
  MaxHeight
  MaxWidth
  MinHeight
  MinWidth
  NavDown
  NavIndex
  NavLeft
  NavRight
  NavUp
  Opacity
  Order
  Outline
  OutlineColor
  OutlineOffset
  OutlineStyle
  OutlineWidth
  Overflow
  OverflowX
  OverflowY
  Padding
  PaddingBottom
  PaddingLeft
  PaddingRight
  PaddingTop
  PageBreakAfter
  PageBreakBefore
  PageBreakInside
  Perspective
  PerspectiveOrigin
  Position
  Quotes
  Resize
  Right
  TabSize
  TableLayout
  TextAlign
  TextAlignLast
  TextDecoration
  TextDecorationColor
  TextDecorationLine
  TextDecorationStyle
  TextIndent
  TextJustify
  TextOverflow
  TextShadow
  TextTransform
  Top
  Transform
  TransformOrigin
  TransformStyle
  Transition
  TransitionDelay
  TransitionDuration
  TransitionProperty
  TransitionTimingFunction
  UnicodeBidi
  VerticalAlign
  Visibility
  WhiteSpace
  Width
  WordBreak
  WordSpacing
  WordWrap
  ZIndex
} from "./Properties";

export type Property =
  AlignContent |
  AlignItems |
  AlignSelf |
  All |
  Animation |
  AnimationDelay |
  AnimationDirection |
  AnimationDuration |
  AnimationFillMode |
  AnimationIterationCount |
  AnimationName |
  AnimationPlayState |
  AnimationTimingFunction |
  BackfaceVisibility |
  Background |
  BackgroundAttachment |
  BackgroundBlendMode |
  BackgroundClip |
  BackgroundColor |
  BackgroundImage |
  BackgroundOrigin |
  BackgroundPosition |
  BackgroundRepeat |
  BackgroundSize |
  Border |
  BorderBottom |
  BorderBottomColor |
  BorderBottomLeftRadius |
  BorderBottomRightRadius |
  BorderBottomStyle |
  BorderBottomWidth |
  BorderCollapse |
  BorderColor |
  BorderImage |
  BorderImageOutset |
  BorderImageRepeat |
  BorderImageSlice |
  BorderImageSource |
  BorderImageWidth |
  BorderLeft |
  BorderLeftColor |
  BorderLeftStyle |
  BorderLeftWidth |
  BorderRadius |
  BorderRight |
  BorderRightColor |
  BorderRightStyle |
  BorderRightWidth |
  BorderSpacing |
  BorderStyle |
  BorderTop |
  BorderTopColor |
  BorderTopLeftRadius |
  BorderTopRightRadius |
  BorderTopStyle |
  BorderTopWidth |
  BorderWidth |
  Bottom |
  BoxShadow |
  BoxSizing |
  CaptionSide |
  Clear |
  Clip |
  Color |
  ColumnCount |
  ColumnFill |
  ColumnGap |
  ColumnRule |
  ColumnRuleColor |
  ColumnRuleStyle |
  ColumnRuleWidth |
  ColumnSpan |
  ColumnWidth |
  Columns |
  Content |
  CounterIncrement |
  CounterReset |
  Cursor |
  Direction |
  Display |
  EmptyCells |
  Filter |
  Flex |
  FlexBasis |
  FlexDirection |
  FlexFlow |
  FlexGrow |
  FlexShrink |
  FlexWrap |
  Float |
  Font |
  FontFamily |
  FontSize |
  FontSizeAdjust |
  FontStretch |
  FontStyle |
  FontVariant |
  FontWeight |
  HangingPunctuation |
  Height |
  JustifyContent |
  Left |
  LetterSpacing |
  LineHeight |
  ListStyle |
  ListStyleImage |
  ListStylePosition |
  ListStyleType |
  Margin |
  MarginBottom |
  MarginLeft |
  MarginRight |
  MarginTop |
  MaxHeight |
  MaxWidth |
  MinHeight |
  MinWidth |
  NavDown |
  NavIndex |
  NavLeft |
  NavRight |
  NavUp |
  Opacity |
  Order |
  Outline |
  OutlineColor |
  OutlineOffset |
  OutlineStyle |
  OutlineWidth |
  Overflow |
  OverflowX |
  OverflowY |
  Padding |
  PaddingBottom |
  PaddingLeft |
  PaddingRight |
  PaddingTop |
  PageBreakAfter |
  PageBreakBefore |
  PageBreakInside |
  Perspective |
  PerspectiveOrigin |
  Position |
  Quotes |
  Resize |
  Right |
  TabSize |
  TableLayout |
  TextAlign |
  TextAlignLast |
  TextDecoration |
  TextDecorationColor |
  TextDecorationLine |
  TextDecorationStyle |
  TextIndent |
  TextJustify |
  TextOverflow |
  TextShadow |
  TextTransform |
  Top |
  Transform |
  TransformOrigin |
  TransformStyle |
  Transition |
  TransitionDelay |
  TransitionDuration |
  TransitionProperty |
  TransitionTimingFunction |
  UnicodeBidi |
  VerticalAlign |
  Visibility |
  WhiteSpace |
  Width |
  WordBreak |
  WordSpacing |
  WordWrap |
  ZIndex;
